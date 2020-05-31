<template>
  <div class="login">
    <h3 class="heading">Login to your Account</h3>
    
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input 
        type="text" 
        id="name"
        v-model="user.email" 
        placeholder="Email" 
        :class="{ error: $v.user.email.$error }"
        @blur="$v.user.email.$touch()"
      >

      <transition name="slide-in" mode="out-in" appear>
        <template v-if="$v.user.email.$error">
          <p v-if="!$v.user.email.required" class="errorMessage">Email is required.</p>
          <p v-if="!$v.user.email.email" class="errorMessage">Please enter a valid email</p>
        </template>
      </transition>

      <label for="password">Password</label>&nbsp;
      <div class="password-input">
        <i 
          :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'" 
          @click="showPassword = !showPassword">
        </i>
        <input 
          :type="showPassword ? 'text' : 'password'" 
          id="password"
          v-model="user.password" 
          placeholder="Password" 
          @keyup.enter="$emit('login-user', user)"
          :class="{ error: $v.user.password.$error }"
          @blur="$v.user.password.$touch()"
        >
      </div>
      
      <transition name="slide-in" mode="out-in" appear>
      <template v-if="$v.user.password.$error">
        <p v-if="!$v.user.password.required" class="errorMessage">Password is required.</p>
      </template>
      </transition>

      <button 
        type="submit" 
        class="login-btn"
        role="button"
      >
        Login
      </button>
    </form>
    <!-- <div class="spacer">
      <span>OR</span>
    </div> -->
    <p class="create-acc">Don't have an account? <router-link to="/register"><span class="link">Sign Up</span></router-link></p>
  </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      showPassword: false
    }
  },
  validations: {
    user: {
      email: { 
        required, 
        email 
      },
      password: { 
        required,
      }
    }
  },
  methods: {
    login () {
      // console.log('Submited the form')
      this.$v.$touch()
      if(!this.$v.$invalid) {
        this.$emit('login-user', this.user)
      } else {
        const notification = {
          type: 'error',
          message: 'Please fill the form correctly'
        }
        this.$store.dispatch('notification/add', notification, { root: true })
      }
    }
  }
}
</script>

<style scoped>

.slide-in-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-in-leave {
  opacity: 0;
  transform: translateX(30px);
}

.login {
  width: 30%;
  margin: auto;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.14);
  padding: 2em;
  border-radius: 0.7em;
  display: flex;
  flex-direction: column;
}

.heading {
  font-size: 1.9rem;
  font-weight: 700;
  color: #031B4E;
  margin-bottom: 0.5em;
  text-align: center;
}

label {
  display: flex;
  text-align: left;
  margin: 1em 0 0.3em 0;
  color: #464555;
  font-size: 0.95rem;
  font-weight: 600;
}

input {
  padding: 0.8em;
  outline: none;
  border: 1.9px solid #D1D1D1;
  border-radius: 0.35em;
  transition: all 0.1s ease-in-out;
  display: block;
  width: 100%;
}

input:focus {
  border: 1.9px solid #0069FF;
  box-shadow: 0 0 9.5px #0069FF99;
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
  background: linear-gradient(to bottom, #0069ff, #0066f8, #0063f1, #0061ea, #005ee3);
  color: #fff;
  font-weight: 600;
  margin: 1.5em 0 0.5em 0;
  cursor: pointer;
  padding: 10px 10px;
  border: none;
  border-radius: 0.35em;
  display: block;
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.login-btn:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
}

/* .disabledBtn {
  background: linear-gradient(to bottom, #0069ff55, #0066f855, #0063f155, #0061ea55, #005ee355);
  cursor: default;
} */

.create-acc {
  color: rgba(3, 27, 78, 0.7);
  margin: 1em 0 0;
  text-align: center;
}

.link {
  color: #0069FF;
  font-weight: 600;
}

.error {
  border: 1.9px solid #D8000C;
  box-shadow: 0 0 7px #D8000C99;
}

.errorMessage {
  margin-top: 0.5em;
  color: #D8000C;
  font-size: 0.7rem;
}

.password-input {
  position: relative;
}

.password-input i {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
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