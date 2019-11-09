<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
.login {
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

</style>