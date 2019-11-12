<template>
  <div>
    <h1>Menu</h1>
    <hr>
    <ul>
      <li v-for="item in menuItems">
        <div class="body">
          <img :src="item.image" alt="Image of food">
          <div class="item-name">{{item.name}}</div>
          <div class="price">{{item.price}}</div>
          <button @click="addToCart(item)">Add to cart</button>
        </div>
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
    },
    async addToCart(item) {
      const response = await RestaurantServices.addToCart(item)
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style>

</style>