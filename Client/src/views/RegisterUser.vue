<template>
  <div class="signUp-form">
    <SignupForm @signup-user="signUp"/>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import firebase from 'firebase'

  export default {
    name: 'SignUp',
    components: {
      SignupForm
    },
    methods: {
      signUp(e) {
        this.$store.dispatch('auth/register', 
          {
            name: e.name,
            email: e.email,
            password: e.password
          }, 
          { root: true }
        ).then(() => {
          const notification = {
            type: 'success',
            message: 'User Registered Successfully',
            timeout: 2000
          }
          this.$store.dispatch('notification/add', notification, { root: true })
          this.$router.push({name: 'user'})
        })
        // firebase.auth().createUserWithEmailAndPassword(e.email, e.password).then(
        //   (user) => {
        //     if (user) {
        //       user.updateProfile({
        //         displayName: e.name
        //       })
        //     }
        //     this.$router.push('admin')
        //   },
        //   (err) => {
        //     alert('Oops ' + err.message)
        //   }
        // );
      }
    }
  }
</script>

<style scoped>

</style>