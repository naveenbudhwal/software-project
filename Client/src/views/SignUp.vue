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
    data() {
      return {
        displayName: ''
      }
    },
    methods: {
      signUp(e) {
        firebase.auth().createUserWithEmailAndPassword(e.email, e.password).then(
          (user) => {
            if (user) {
              user.updateProfile({
                displayName: displayName
              })
            }
            this.$router.push('admin')
          },
          (err) => {
            alert('Oops ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>