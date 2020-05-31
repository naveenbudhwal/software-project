<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          RMS
        </router-link>
      </div>
      <ul class="nav-links">  
        <li class="nav-item underline">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item underline">
          <router-link to="/menu">Menu</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <router-link to="/user"><i class="far fa-user"></i></router-link>
        </li>
        <li class="nav-item cart" v-if="loggedIn">
          <router-link to="/cart">
            <i class="fas fa-shopping-cart"></i>
            <counter-badge :count="cartLength"></counter-badge>
          </router-link>
        </li>
        <li class="nav-item underline" v-if="!loggedIn">
          <router-link to="/login" class="signin-btn">Login</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link to="/register" class="signup-btn">Sign Up</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn" @click="logout">
          <button class="logout-btn">Logout</button>
        </li>
      </ul>
      
      <div id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  </div>
</template>

<script>
  window.addEventListener("load", function() {
  const navLinks = document.querySelector(".nav-links");
  const navIcon = document.querySelector("#nav-icon1");
  const links = document.querySelectorAll(".nav-links li");
  navIcon.addEventListener("click", function() {
    navLinks.classList.toggle("open");
    navIcon.classList.toggle("open2");
    navIcon.classList.toggle("fix");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navIcon.classList.remove("open2");
        navIcon.classList.remove("fix");
      });
    });  
  })
});

import CounterBadge from '@/components/CounterBadge.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CounterBadge
  },
  computed: {
    ...mapGetters('cart', ['cartLength']),
    ...mapGetters('auth', ['loggedIn'])
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout', { root: true }).then(() => {
        const notification = {
          type: 'success',
          message: 'Successfully Logged Out',
          timeout: 2000
        }
        this.$store.dispatch('notification/add', notification, { root: true })
      })
    }
  }
}
</script>

<style scoped>

.cart {
  position: relative;
}

.logout-btn {
  border: none;
  background: linear-gradient(to bottom, #d8000c, #ce0008, #c50005, #bb0002, #b20000);
  color: #fff;
  font-weight: 600;
  border-radius: 0.35em;
  padding: 0.4em;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
}

.logout-btn:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
}

.signup-btn {
  border: none;
  background: linear-gradient(to bottom, #0069ff, #0066f8, #0063f1, #0061ea, #005ee3);
  color: #fff !important;
  font-weight: 600;
  border-radius: 0.35em;
  padding: 0.5em;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
}

.signup-btn:hover {
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
}

.signin-btn {
  border: none;
  color: #0069ff !important;
  font-weight: 600;
  font-size: 1.2rem;
}


#nav-icon1 {
  display: none;
  width: 35px;
  height: 35px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 2;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: #434655;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  opacity: 0;
  top: 5px;
}

#nav-icon1 span:nth-child(2) {
  width: 28px;
  top: 15px;
}

#nav-icon1 span:nth-child(3) {
  top: 25px;
}

#nav-icon1.open2 span:nth-child(1) {
  opacity: 1;
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open2 span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open2 span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

#nav-icon1.fix {
  position: fixed;
  right: 10%;
}

ul, li {
  padding: 0;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.2em;
  height: 15vh;
}

.logo {
  margin-left: 3em;
}

.logo img {
  width: 100%;
  height: 100%;
}

.nav-links {
  display: flex;
  justify-content: space-evenly;
  margin-right: 3em;
  width: 30%;
}

a {
  text-decoration: none;
  color: #031B4E;
}

.nav-links a {
  color: #031B4E;
}

.nav-links

.nav-links a:hover {
  color: #031B4E;
}

.nav-links li {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.underline {
  position: relative;
}

.underline:before {
  content: "";
  position: absolute;
  width: 70%;
  height: 3px;
  bottom: 0;
  background-color: #2b70dc;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.underline:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

/* nav a.router-link-exact-active {
  color: #2b70dc;
} */

@media only screen and (max-width: 1200px) {
  .nav-links {
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .navbar {
    position: relative;
    width: 80%;
    margin: auto;
  }

  #nav-icon1 {
    display: block;
  }

  .logo {
    margin-left: -8px;
  }

  .nav-links {
    position: fixed;
    background: #2b70dc;
    /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(43, 112, 220, 1)); */
    background: #2b70dc;
    transform: translateX(100vh);
    right: 0px;
    height: 100vh;
    width: 60%;
    margin: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.8s ease-in-out;
    pointer-events: none;
    z-index: 2;
  }

  .nav-links li {
    padding: 30px 0;
  }

  .nav-links a {
    color: #fff;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  nav .nav-links a.router-link-exact-active {
    color: #fff;
    position: relative;
  }

  nav .nav-links a.router-link-exact-active::before {
    content: ''; 
    position: absolute;
    width: 2.8em;
    height: 0.5em;
    background: rgb(41, 41, 41);
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .nav-links a:hover {
    color: #434655;
    font-size: 1.2em;
  }

  .nav-links.open {
    transform: translateX(0);
    pointer-events: all;
  }
}

</style>