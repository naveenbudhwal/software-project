<template>
<div class="order-page">
  <h1>Order Placed Successfully!</h1>
  <button class="make-bill" @click="makeBill">View Bill</button>
  <div class="view-bill" v-if="viewBill">
    <bill :billItems="cart.cart" :total="cart.billTotal" :tax="tax"></bill>
  </div>
  <div class="customer-info">
    <p><i class="fas fa-info-circle"></i> Please fill out your information</p>
    <input type="text" v-model="customerName" name="customer-name" placeholder="Your good name" required>
    <input type="text" v-model="customerMobileNo" name="customer-mobile" placeholder="Your mobile number">
    <input type="email" v-model="email" name="email" placeholder="Your email address">
  </div>
  <div class="feedback">
    <p>Please give your valuable feedback based on your experience</p>
    <textarea v-model="feedback" rows="4" cols="50" placeholder="Feedback"></textarea>
  </div>
  <button class="pay-bill" @click="payBill">Pay Now</button>
</div>
</template>

<script>
import Bill from '../components/Bill.vue'
import RestaurantServices from '../services/RestaurantAPI.js'
import { mapState } from 'vuex'

export default {
  name: 'order',
  components: { Bill },  
  data() {
    return {
      viewBill: false,
      customerName: '',
      customerMobileNo: '',
      feedback: '',
      email: '',
      tax: 30
    }
  },
  methods: {
    async payBill(item) {
      var d = new Date();
      var currentDate = d.getDate() + "/" + (d.getMonth()+1)  + "/" + d.getFullYear()  
      var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var info = {
        customerName: this.customerName,
        customerMobileNo: this.customerMobileNo,
        customerEmail: this.email,
        feedback: this.feedback,
        date: currentDate,
        time: currentTime
      }
      const response = await RestaurantServices.addOrderItems(this.cart.cart, info)
      this.$store.dispatch('cart/emptyCart', null, { root: true })
      this.$router.replace('payment')
    },
    makeBill() {
      this.viewBill = !this.viewBill
    }
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped>

.customer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.customer-info input {
  width: 30%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ddd;
  margin: 10px 0;
}

.customer-info input:focus {
  outline: none;
  border-bottom: 2px solid #1F60F0;
}

.customer-info p {
  margin: 50px 0 10px 0;
}

.make-bill {
  margin-top: 10px; 
  background: #2b70dc;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 1.2em;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px;
}

.view-bill {
  margin-top: 40px;
}

.feedback {
  margin-top: 40px;
}

.pay-bill {
  margin: 20px 0;
  background: #1F60F0;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 1.2em;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px;
}

textarea {
  border-radius: 10px;
  padding: 10px;
}

textarea:focus {
  outline: none;
  border: 2px solid #1F60F0;
}
</style>