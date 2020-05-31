<template>
  <div class="bill">
    <div class="total">
      <div class="item">Item</div>
      <div class="qty">Qty</div>
      <div class="price">Total</div>
    </div>
    <hr>
    <ul>
      <li v-for="(item,index) in billItems" :key="index">
        <div class="bill-items">
          <div class="item-name">{{item.name}}</div> 
          <div class="item-qty">{{item.qty}}</div> 
          <div class="item-price">{{item.price}}</div>
        </div>
      </li>
    </ul>
    <hr>
    <div class="total">
      <div class="bill-sub-total">Sub Total</div>
      <div class="bill-sub-total">₹ {{total}}</div>
    </div>
    <div class="total">
      <div class="tax">Tax</div>
      <div>{{tax}}</div>
    </div>
    <div class="total">
      <div class="bill-total">Total (Incl All Taxes)</div>
      <div class="bill-sub-total">₹ {{billTotal}}</div>
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

.item, .qty, .price {
  font-weight: 600;
}

.bill {
  max-width: 500px;
  width: 70%;
  margin-left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  padding: 1.6em;
  border-radius: 0.6em;
}

.bill ul li {
  list-style-type: none;
}

.bill-items {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.item, .item-name {
  flex: 2;
  text-align: left;
}

.qty, .item-qty {
  flex: 1;
}

.price, .item-price {
  flex: 1;
  text-align: right;
}

.total {
  display: flex;
  justify-content: space-between;
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