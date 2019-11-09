<template>
  <div>
    <h1>Menu</h1>
    <hr>
    <ul>
      <li v-for="item in menuItems">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import RestaurantServices from '../services/RestaurantAPI.js'

export default {
  name: 'menu-items',
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
    }
  }
}
</script>

<style>

</style>