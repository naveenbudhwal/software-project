<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" alt="Vue logo"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <router-link to="/" class="navbar-brand">RMS</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/">Home <span class="sr-only">(current)</span> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu">Menu </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">Login </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="fade-in" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

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


#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
}

.navbar {
  margin-top: 25px;
  margin-bottom: 50px;
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
