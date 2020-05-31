<template>
  <div class="login-form">
    <LoginForm @login-user="login"/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import firebase from 'firebase'

  export default {
    name: 'Login',
    components: {
      LoginForm,
    },
    methods: {
      login(e) {
        this.$store.dispatch('auth/login', 
          {
            email: e.email,
            password: e.password
          }, 
          { root: true }
        ).then(() => {
          this.$router.push({ name: 'user' })
          const notification = {
            type: 'success',
            message: 'Successfully Logged In!!',
            timeout: 3000
          }
          this.$store.dispatch('notification/add', notification, { root: true })
        }).catch(err => {
          const notification = {
            type: 'error',
            message: err.response.data.error,
            timeout: 5000
          }
          this.$store.dispatch('notification/add', notification, { root: true })
        })
        // firebase.auth().signInWithEmailAndPassword(e.email, e.password).then((user) => {
        //   this.$router.replace('admin')
        // }).catch((error) => {
        //   const notification = {
        //     type: 'error',
        //     message: 'Error logging in'
        //   }
        //   dispatch('notification/add', notification, { root: true })
        // })
      }
    }
  }
</script>

<style scoped>

</style>