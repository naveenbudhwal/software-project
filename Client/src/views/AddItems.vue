<template>
  <div>
    <input v-model="name" type="text" placeholder="Item name">
    <input v-model="price" type="text" placeholder="Item price">
    <input v-model="image" type="text" placeholder="Item image url">
    <button @click="addMenuItem">Add Item</button>
  </div>
</template>

<script>
import RestaurantServices from '../services/RestaurantAPI.js'

export default {
  name: 'add-menu-items',
  data() {
    return {
      name: '',
      price: '',
      image: ''
    }
  }, 
  methods: {
    async addMenuItem() {
      var item = {
        name: this.name,
        price: this.price,
        image: this.image
      }
      const response = await RestaurantServices.addMenuItems(item)
      this.$router.replace('admin')
    }
  }
}
</script>

<style>

</style>