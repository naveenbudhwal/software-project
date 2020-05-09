<template>
  <div class="order-page">
    <div class="first-half">
      <payment-gateway></payment-gateway>      
    </div>
    <div class="second-half">
      <h1>Payment</h1>
      <bill :billItems="cart.cart" :total="cart.billTotal" :tax="tax"></bill>
      <button class="pay-bill" @click="payBill">Place your order</button>
    </div>
  </div>
</template>

<script>
import Bill from '../components/Bill.vue'
import PaymentGateway from '../components/PaymentGateway.vue'
import RestaurantServices from '../services/RestaurantAPI.js'
import { mapState } from 'vuex'

export default {
  name: 'payment',
  components: { Bill, PaymentGateway },  
  data() {
    return {
      tax: 30
    }
  },
  methods: {
    async payBill(item) {
      var d = new Date();
      var currentDate = d.getDate() + "/" + (d.getMonth()+1)  + "/" + d.getFullYear()  
      var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var info = {
        date: currentDate,
        time: currentTime
      }
      const response = await RestaurantServices.addOrderItems(this.cart.cart, info)
      this.$store.dispatch('cart/emptyCart', null, { root: true })
      this.$router.push('order')
    }
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped>

.order-page {
  font-family: 'Montserrat', sans-serif;
  display: flex;
}

.first-half {
  flex: 1;
  height: 85vh;
}

.second-half {
  flex: 1;
  height: 85vh;
}

h1 {
  font-weight: 600;
}

.pay-bill {
  margin: 20px 0;
  background: #1F60F0;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8em;
  border-radius: 0.4em;
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  text-transform: uppercase;
}

.pay-bill:hover {
  transform: translate(-0.7px, -0.7px);
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
</style>