<template>
  <div class="cart-page">
    <h2><i class="fas fa-shopping-cart"></i> Cart</h2>
    <hr>
    <div class="cart">
      <ul>
        <li v-for="(item,index) in cart" :key="index">
          <div class="cart-items">
            <div class="delete-item" @click="deleteItems(item)">
              <i class="fas fa-trash-alt"></i>
            </div>
            <div class="item-name">{{item.name}}</div>
            <div class="item-price"><img src="../assets/rupee.png" alt="rupee sign">{{item.price}}</div> 
          </div>
        </li>
      </ul>
    </div>
    <div v-if="!billTotal">
      <p>Your cart is empty</p>
      <p>Go back to the menu and add some food</p>
    </div>
    <div v-if="billTotal>0" class="bill-total">Total: {{billTotal}}</div>
    <div class="link" v-if="billTotal>0">
      <router-link class="link" to="/menu">Order more food</router-link>
    </div>
    <button :class="{disabled: !billTotal}" :disabled=!billTotal @click="orderItems">Order Now</button>
  </div>
</template>

<script>
import RestaurantServices from '../services/RestaurantAPI.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      cartItems: [],
    }
  },
  mounted() {
    this.calcBillTotal()
  },
  methods: {
    calcBillTotal() {
      this.$store.dispatch('calcBillTotal')
    },
    deleteItems(item) {
      this.$store.dispatch('removeFromCart', item)
    },
    orderItems() {
      this.$router.replace('order')
    }
  },
  computed: {
    ...mapState(['cart', 'billTotal'])
  }
}
</script>

<style scoped>

.cart-page {
  font-family: 'Montserrat', sans-serif;
}

.cart {
  margin-top: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.cart ul li {
  list-style-type: none;
}

.cart-items {
  width: 700px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.cart-items .item-name,.item-price {
  font-size: 1.1em;
  font-weight: 400;
}

.cart-items .item-price img {
  width: 15px;
  height: auto;
}

.bill-total {
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1.2em;
}

.delete-item {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 30px;
  height: 22px; */
  cursor: pointer; 
}

.delete-item i {
  font-size: 20px;
  color: #C4302B;
}

.link {
  font-size: 1.02em;
}

a:hover {
  text-decoration: none;
}

button {
  background: #C4302B;
  color: #fff;
  margin: 15px 0;
  border: none;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px; 
  transition: background 0.2s ease-in-out;
}

button:hover {
  background: #B11B1E;
}

.disabled {
  background: rgba(196, 48, 43, 0.5);
  color: #fff;
}

.disabled:hover {
  background: rgba(196, 48, 43, 0.5);
}

hr {
  width: 20%;
}

</style>