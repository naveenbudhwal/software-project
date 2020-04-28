<template>
  <div class="login">
    <h3 class="heading">Login to Console</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <button class="login-btn" @click="login">Login</button>
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

.login {
  width: 30%;
  margin: auto;
  border: 1px solid #F1F1F1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  padding: 2em;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
}

.heading {
  font-size: 1.9rem;
  font-weight: 700;
  color: #031B4E;
  margin-bottom: 1em;
}

input {
  padding: 10px;
  margin: 5px 0;
  outline: none;
  border: 1px solid #D1D1D1;
  border-radius: 0.2em;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(3, 27, 78, 0.7);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(3, 27, 78, 0.7);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(3, 27, 78, 0.7);
}

.login-btn {
  background: #0069FF;
  color: #fff;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
  padding: 10px 10px;
  border: none;
  border-radius: 0.2em;
}

</style>