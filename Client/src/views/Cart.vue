<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cartItems">
        <input type="checkbox" @click="deleteItems(item)">
        {{item.name}}
      </li>
    </ul>
    <div class="total">Total: {{billTotal}}</div>
    <button :disabled=!billTotal>Order Now</button>
  </div>
</template>

<script>
import RestaurantServices from '../services/RestaurantAPI.js'

export default {
  data() {
    return {
      cartItems: [],
      billTotal: 0
    }
  },
  mounted() {
    this.loadCartItems()
  },
  methods: {
    async loadCartItems() {
      const response = await RestaurantServices.getCartItems()
      this.cartItems = response.data
      this.cartItemTotal()
    },
    deleteItems(item) {
      RestaurantServices.deleteCartItem(item)
      this.billTotal = this.billTotal - item.price
      this.cartItems = this.cartItems.filter(function(obj) {
        return obj.name !== item.name;
      });
    }
  },
  computed: {
    cartItemTotal() {
      this.cartItems.forEach(item => {
        this.billTotal = this.billTotal + item.price
      });
    }
  }
}
</script>

<style>

</style>