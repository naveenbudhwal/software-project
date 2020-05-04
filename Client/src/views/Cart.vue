<template>
  <div class="cart-page">
    <div class="first-half">
      <h2><i class="fas fa-shopping-cart"></i> Cart</h2>
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
                <input type="text" :value="item.qty">
                <span @click="incrementQty(item)">+</span>
              </div>
              <div class="item-price">₹ {{item.price}}</div> 
              <div class="delete-item" @click="deleteItems(item)">
                <!-- <i class="fas fa-trash-alt"></i> -->
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
    </div>

    <div class="second-half">
      <div class="receipt">
        <div class="tbl-header">
          <table border="0">
            <thead>
              <tr> 
                <th>Name</th>
                <th>Qty</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr v-for="(item, $itemIndex) in cart.cart" :key="$itemIndex">
                <td>{{item.name}}</td>
                <td>{{item.qty}}</td>
                <td>{{item.price*item.qty}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td></td>
                <td>Tax</td>
                <td>{{tax}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td></td>
                <td>Total</td>
                <td>{{cart.billTotal + tax}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button :class="{disabled: !cart.billTotal}" :disabled=!cart.billTotal @click="orderItems">Order Now</button>
    </div>

    <div v-if="!cart.billTotal">
      <p>Your cart is empty</p>
      <p>Go back to the menu and add some food</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      tax: 20
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
    ...mapState(['cart'])
  }
}
</script>

<style scoped>

h2 {
  text-align: left;
}

.cart-page {
  font-family: 'Montserrat', sans-serif;
  display: flex;
}

.first-half {
  flex: 2;
  padding: 0 4%;
}

.list {
  height: 60vh;
  overflow-x: auto;
  /* border: 2px solid #f1f1f1; */
  /* border-radius: 1em; */
  /* -ms-overflow-style: none; */
}

/* Hide scrollbar for Chrome, Safari and Opera */
/* .list::-webkit-scrollbar {
  display: none;
} */

.second-half {
  flex: 1;
  padding-top: 2em;
  background: #f1f1f1;
  height: calc(85vh - 2em);
  margin: 1em;
}

table {
  width:100%;
  table-layout: fixed;
}

.tbl-content {
  overflow-x: auto;
  margin-top: 0px;
  margin-bottom: 1em;
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
}

td {
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}

.cart {
  margin-top: 50px;
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
  width: 100%;
  margin-right: 0;
  margin-top: 2em;
}

.link {
  font-size: 1.02em;
  font-weight: 600;
}

.link span {
  color: #515151;
  margin-right: 6px;
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


</style>