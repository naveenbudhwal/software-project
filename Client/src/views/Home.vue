<template>
  <div class="home-page">
    <div class="social-nav">
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-facebook-f"></i>
    </div>
    <div class="container">
      <div class="intro">
        <div class="intro-text">
          <p>One cannot think well, love well, sleep well, if one has not dined well.</p>
          <div class="menu-button">
            <router-link to="/menu">
              <button>Menu</button>
            </router-link>
          </div>
        </div>
        <div class="landing-image">
          <img src="../assets/home.jpg" alt="Delicious food">
        </div>
      </div>
      <button @click="reserve" class="reserve-button">Reserve table</button>
      <div v-if="reserveTable" class="reserve-form">
        <p>At what time do you want to reserve a table</p>
        <input v-model="time" type="text" placeholder="HH:MM" required>
        <p>Which day would you like to reserve</p>
        <input v-model="day" type="text" placeholder="Day" required>
        <br>
        <button @click="confirm" class="reserve-button1">Reserve</button>
      </div>
      <div v-if="confirmTable">
        <p>Your table has been reserved at {{time}} on {{day}}</p>
      </div>
    </div>
    <div class="footer">
      <i class="far fa-copyright"></i> {{getYear}} RMS. All rights reserved
    </div>
  </div>
</template>

<script>

var d = new Date();
import NotificationBar from '@/components/NotificationBar.vue';

export default {
  name: 'home',
  data() {
    return {
      reserveTable: false,
      confirmTable: false,
      time: '',
      day: ''
    }
  },
  methods: {
    reserve() {
      this.confirmTable = false;
      if(!this.reserveTable) this.reserveTable = true
      else this.reserveTable = false
    },
    confirm() {
      this.reserveTable = false
      this.confirmTable = true
    }
  },
  computed: {
    getYear() {
      var d = new Date();
      return d.getFullYear()
    }
  }
}
</script>

<style scoped>

.home-page {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-top: 5%;
}

.intro {
  display: flex;
}

.intro-text {
  flex: 1.5;
}

.intro-text p {
  font-size: 2.5em;
  font-weight: 600;
  margin-top: 50px;
}

button {
  padding: 10px 30px;
  border: none;
  border-radius: 24px;
  font-size: 1.2em;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  margin: 40px 0;
  transition: background 0.2s ease-in-out;
}

.intro-text .menu-button button {
  background: #DF0038;
  color: #eee;
}

.intro-text .menu-button button:hover {
  background: #A20011;
}

.landing-image {
  flex: 1;
}

.landing-image img {
  width: 20em;
  height: auto;
}

.social-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 4%;
  top: 30%;
}

.social-nav i {
  font-size: 20px;
  margin: 15px 0;
  cursor: pointer;
}

.social-nav i:hover {
  color: #1F60F0;
}

.reserve-button {
  background: #1F60F0;
  color: #eee;
}

.reserve-button:hover {
  background: #001B93;
}

.reserve-button1 {
  background: #1F60F0;
  color: #eee;
  margin: 0;
}

.reserve-button1:hover {
  background: #001B93;
}

.reserve-form {
  /* background: #CFDEFF; */
  padding: 30px;
  border: 2px solid #ddd;
  width: 500px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.reserve-form input {
  border: none;
  padding: 8px;
  /* background: #CFDEFF; */
  border-bottom: 2px solid #ddd;
  margin-bottom: 30px;
}

.reserve-form input:focus {
  outline: none;
  border-bottom: 2px solid #1F60F0;
}

.reserve-form p {
  font-weight: 500;
}

.footer {
  margin: 20px 0;
}

</style>
