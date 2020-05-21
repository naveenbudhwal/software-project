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
        firebase.auth().signInWithEmailAndPassword(e.email, e.password).then((user) => {
          this.$router.replace('admin')
        }).catch((error) => {
          const notification = {
            type: 'error',
            message: 'Error logging in'
          }
          dispatch('notification/add', notification, { root: true })
        })
      }
    }
  }
</script>

<style scoped>

</style>