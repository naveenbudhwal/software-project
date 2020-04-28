<template>
  <div class="bill">
    <div class="total">
      <div class="item">Item</div>
      <div class="price">Total</div>
    </div>
    <hr>
    <ul>
      <li v-for="(item,index) in billItems" :key="index">
        <div class="bill-items">
          <div class="item-name">{{item.name}}</div> 
          <div class="item-price">{{item.price}}</div>
        </div>
      </li>
    </ul>
    <hr>
    <div class="total">
      <div class="bill-sub-total">Sub Total</div>
      <div class="bill-sub-total"><img src="../assets/rupee.png" alt="rupee sign">{{total}}</div>
    </div>
    <div class="total">
      <div class="tax">Tax</div>
      <div class="tax">{{tax}}</div>
    </div>
    <div class="total">
      <div class="bill-total">Total (Incl All Taxes)</div>
      <div class="bill-sub-total"><img src="../assets/rupee.png" alt="rupee sign">{{billTotal}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  props: {
    total: Number,
    billItems: Array,
    tax: Number
  },
  data() {
    return {
      cartItems: []    }
  },
  methods: {
    payBill() {
      this.$router.replace('payment')
    }
  },
  computed: {
    billTotal() {
      return this.total + this.tax
    }
  }
}
</script>

<style scoped>

ul,li {
  padding: 0;
  margin: 0;
}

.item, .price {
  font-weight: 600;
}

.bill {
  width: 500px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  border: 2px solid #eeeeee;
  padding: 20px;
  border-radius: 20px;
}

.bill ul li {
  list-style-type: none;
}

.bill-items {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.bill-items .item-price img {
  width: 15px;
  height: auto;
}

.total {
  display: flex;
  justify-content: space-between;
}

img {
  width: 15px;
  height: auto;
}

.bill-sub-total {
  font-weight: 600;
  margin: 10px 0;
}

.bill-total {
  font-weight: 600;
  margin: 10px 0;
}
</style>