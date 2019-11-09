<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" alt="Vue logo"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <a class="navbar-brand" href="#">Restaurant Management System</a>
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
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-top: 25px;
  margin-bottom: 50px;
}

.navbar ul li a {
  margin: 0 20px;
  font-size: 1.2rem;
}

.navbar-brand {
  font-size: 1.2rem;
  margin-left: 20px;
}


</style>
