<template>
  <div class="add-items">
    <router-link to="/admin">
      <i class="fas fa-arrow-alt-circle-left go-back"></i>
    </router-link>
    <h3>Add Items to Menu</h3>
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
      this.$router.replace('/admin')
    }
  }
}
</script>

<style scoped>

.add-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-bottom: 30px;
}

input {
  width: 30%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #ddd;
  /* border-radius: 10px; */
}

input:focus {
  outline: none;
  border-bottom: 2px solid #1F60F0;
}

button {
  margin: 40px 0;
  cursor: pointer;
  padding: 10px 25px;
  background: #1F60F0; 
  color: #eee;
  border: none;
  border-radius: 24px;
  transition: background 0.2s ease-in-out;
  font-weight: 500;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  margin: 40px 0;
}

button:hover {
  background: #0025A3; 
  color: #eee;
}

.go-back {
  position: absolute;
  top: 17%;
  left: 5%;
  font-size: 35px;
}

</style>