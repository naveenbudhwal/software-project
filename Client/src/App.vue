<template>
  <div id="app">
    <NotificationContainer/> 
    <NavBar/>
    <transition name="fade-in" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue';
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NotificationContainer,
    NavBar
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

/* --------- Transition Styles ---------- */

.fade-in-enter {
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-in-leave {
  opacity: 0;
  transform: translateX(-30px);
}

/* -------------------------------------- */

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 500;
}

.navbar {
  height: 15vh;
  padding: 0;
}

.navbar ul li a {
  margin: 0 20px;
  font-size: 1.2rem;
  color: #2c3e50;
}

.navbar ul li a:hover {
  text-decoration: none;
  color: #1F60F0;
}

.navbar-brand {
  font-size: 1.2rem;
  margin-left: 20px;
}

.navbar-nav li.active > a {
	color: #1F60F0;
}

.navbar-nav {
  margin-right: 40px;
}

</style>
