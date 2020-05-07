<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          RMS
        </router-link>
      </div>
      <ul class="nav-links">  
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu">Menu</router-link>
        </li>
        <li class="nav-item cart">
          <router-link to="/cart">
            <i class="fas fa-shopping-cart"></i>
            <counter-badge :count="cartLength"></counter-badge>
          </router-link>
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
  computed: mapGetters('cart', ['cartLength'])
}
</script>

<style scoped>

.cart {
  position: relative;
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
  margin-left: 30px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  margin-right: 30px;
  width: 30%;
}

a {
  text-decoration: none;
  color: rgb(73, 80, 87);
}

.nav-links a:hover {
  color: #2b70dc;
}

.nav-links li {
  list-style: none;
}

nav a.router-link-exact-active {
  color: #2b70dc;
}

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