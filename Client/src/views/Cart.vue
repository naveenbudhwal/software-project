<template>
  <div class="cart-page">
    <div class="row">
      <h2><i class="fas fa-shopping-cart"></i> Cart <span class="item-count">({{cartLength}} items)</span></h2>

      <button :class="{disabled: !cart.billTotal}" :disabled=!cart.billTotal @click="orderItems">Order Now</button>
    </div>
    <div class="cart">
      <ul class="list">
        <li v-for="(item,index) in cart.cart" :key="index">
          <div class="cart-items">
            <div class="item-desc">
              <div class="item-image"><img :src="item.image" alt="Food"></div>
              <div class="item-name">{{item.name}}</div>
            </div>
            <div class="item-qty">
              <span @click="decrementQty(item)">-</span>
              <input 
                type="text" 
                :value="item.qty" 
                @change="updateQty($event, item)"
              >
              <span @click="incrementQty(item)">+</span>
            </div>
            <div class="item-price">₹ {{item.price}}</div> 
            <div class="delete-item" @click="deleteItems(item)">
              <span>x</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="row">
        <div class="link" v-if="cart.billTotal>0">
          <router-link to="/menu"><span><i class="fas fa-long-arrow-alt-left"></i></span> Order more</router-link>
        </div>
        <div v-if="cart.billTotal>0" class="bill-total">SubTotal: <span>₹{{cart.billTotal}}</span></div>
      </div>
    </div>

    <div v-if="!cart.billTotal" class="empty">
      <p>Your cart is empty</p>
      <p>Go back to the menu and add some food</p>
      <router-link to="/menu"><span><i class="fas fa-long-arrow-alt-left"></i></span> Order more</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      tax: 20,
      qty: 0
    }
  },
  mounted() {
    this.calcBillTotal()
  },
  methods: {
    calcBillTotal () {
      this.$store.dispatch('cart/calcBillTotal', null, { root: true })
    },
    deleteItems (item) {
      this.$store.dispatch('cart/removeFromCart', item, { root: true })
    },
    updateQty (e, item) {
      this.$store.dispatch('cart/update', { item, quantity: e.target.value }, { root: true })
    },
    incrementQty (item) {
      this.$store.dispatch('cart/increment', item, { root: true })
    },
    decrementQty (item) {
      this.$store.dispatch('cart/decrement', item, { root: true })
    },
    orderItems () {
      this.$router.replace('order')
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters('cart', ['cartLength'])
  }
}
</script>

<style scoped>

a {
  color: #2c3e50;
}

h2 {
  font-weight: 600;
}

.cart-page {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  height: 85vh;
  margin: 0 10%;
}

.item-count {
  font-size: 1.2rem;
}

.list {
  height: 60vh;
  overflow-x: auto;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}

.cart-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
}

.item-desc {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
}

.item-name {
  margin-left: 20px;
  font-weight: 600;
  font-size: 1.1rem;
}

.item-price {
  margin-left: 20px;
  font-weight: 600;
  flex: 1;
}

.item-image {
  width: 100px;
  height: 100px;
}

.item-qty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.item-qty input {
  width: 40px;
  border: 2px solid #f1f1f1;
  margin: 0 10px;
  text-align: center;
  font-weight: 600;
  color: #515151;
}

.item-qty span {
  font-weight: 600;
  font-size: 1.2rem;
  color: #515151;
  cursor: pointer;
}

.item-image img {
  width: 100%;
  height: 100%;
}

.empty {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(43, 112, 220, 0.2);
  border-radius: 1em;
  padding: 2em;
}

.empty a {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2b70dc;
}

.empty span {
  color: #2c3e50;
}

.bill-total {
  font-weight: 600;
  font-size: 1.2em;
  color: #a1a1a1;
}

.bill-total span {
  color: #2c3e50;
  font-size: 1.2em;
}

.delete-item {
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  flex: 1;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12.5vh;
  width: 100%;
}

.link {
  font-size: 1.02em;
  font-weight: 600;
}

.link a {
  color: #2b70dc;
}

.link span {
  color: #2c3e50;
  margin-right: 0.3em;
}

.bold {
  font-weight: 600;
}

.big {
  font-size: 1.1em;
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
  font-weight: 600; 
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


</style>