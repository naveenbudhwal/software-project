<template>
  <div class="login">
    <h3 class="heading">Login to your Account</h3>
    <input type="text" v-model="user.email" placeholder="Email" required>
    <input type="password" v-model="user.password" placeholder="Password" required @keyup.enter="$emit('login-user', user)">
    <button class="login-btn" @click="$emit('login-user', user)">Login</button>
    <!-- <div class="spacer">
      <span>OR</span>
    </div> -->
    <p class="create-acc">Don't have an account? <router-link to="/sign-up"><span class="link">Sign Up</span></router-link></p>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
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
  margin: 0.7em 0;
  outline: none;
  border: 1px solid #D1D1D1;
  border-radius: 0.2em;
  transition: all 0.1s ease-in-out;
}

input:focus {
  border: 1.5px solid #0069FF;
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
  margin: 0.7em 0;
  cursor: pointer;
  padding: 10px 10px;
  border: none;
  border-radius: 0.2em;
}

.create-acc {
  color: rgba(3, 27, 78, 0.7);
  margin: 1em 0 0;
}

.link {
  color: #0069FF;
}

/* .spacer {
  width: 100%;
  margin: auto;
  margin: 0.7em auto;
}

.spacer span {
  overflow: hidden;
  text-align: center;
}

.spacer span:before,
.spacer span:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.spacer span:before {
  right: 1em;
  margin-left: -50%;
}

.spacer span:after {
  left: 1em;
  margin-right: -50%;
} */

</style>