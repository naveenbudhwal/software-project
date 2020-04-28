<template>
  <div class="login">
    <h3>Admin Login</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <button @click="login">Login</button>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$router.replace('admin')
      }).catch((error) => {
        console.log('Error logging in ' + error)
      })
    }
  }
}
</script>

<style scoped>

input {
  width: 20%;
  padding: 10px;
  margin: 10px 0;
  outline: none;
}

button {
  margin: 20px 0;
  cursor: pointer;
  padding: 5px 10px;
}

</style>