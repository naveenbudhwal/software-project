<template>
  <div>
    <h1>Admin page</h1>
    <router-link to="/admin/add-menu-items">
      <button>Add items to menu</button>
    </router-link>
    <router-view></router-view>
    <ul>
      <li v-for="item in menuItems">
        <div class="body">
          <input type="checkbox" @click="deleteItems(item)">
          <img :src="item.image" alt="Image of food">
          <div class="item-name">{{item.name}}</div>
          <div class="price">{{item.price}}</div>
        </div>
      </li>
    </ul>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import RestaurantServices from '../services/RestaurantAPI.js'

export default {
  name: 'admin',
  data() {
    return {
      menuItems: []
    }
  },
  mounted() {
    this.loadMenuItems();
  },
  methods: {
    async loadMenuItems() {
      const response = await RestaurantServices.getMenuItems();
      this.menuItems = response.data;
    },
    deleteItems(item) {
      RestaurantServices.deleteMenuItem(item)
      this.menuItems = this.menuItems.filter(function(obj) {
        return obj.name !== item.name;
      });
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>

</style>