<template>
  <div class="sign-up">
    <h3>Let's create a new account</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <button @click="signUp">Sign Up</button>
    <p>Already have an account? <router-link to="/login"><span>Login</span></router-link></p>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (user) {
            user.updateProfile({
              displayName: 'Craig'
            })
          }
          this.$router.replace('login')
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
.sign-up {
  margin-top: 3%;
}

input {
  width: 20%;
  padding: 10px;
  margin: 10px 0;
}

button {
  margin: 20px 0;
  cursor: pointer;
  padding: 5px 10px;
}

p {
  font-size: 13px;
}

span {
  text-decoration: underline;
}

</style>