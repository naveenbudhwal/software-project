<template>
  <div class="payment">
    <div class="debit-card">
      <label for="name">Name on card</label>
      <input type="text" id="name">
      
      <label for="number">Card number</label>
      <input @keyup="formatInput" v-model="cardNumber" type="text" id="number">
      
      <div class="row-1">
        <div class="expiry">
          <label for="exiry-info">Expiry Date</label>
          <div class="expiry-info">
            <input type="text" placeholder="MM"> <span>/</span>
            <input type="text" placeholder="YY">
          </div>
        </div>
        <div class="cvv">
          <label for="cvv-code">CVV</label>
          <div class="cvv-code">
            <input type="password">
          </div>
        </div>
      </div>
      
      
      <button class="submit-btn" @click="$emit('order-items')">Pay</button>
    </div>
    <div class="spacer">
      <span>OR PAY USING</span>
    </div>
    <div class="row">
      <div class="payment-merchant">
        <div class="merchant-logo">
          <img src="@/assets/google_pay.png" alt="">
        </div>
        <p>Google Pay</p>
      </div>
      <div class="payment-merchant">
        <div class="merchant-logo">
          <img src="@/assets/paytm.png" alt="">
        </div>
        <p>Paytm</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'payment-gateway',
    data() {
      return {
        cardNumber: null
      }
    },
    methods: {
      formatInput () {
        // Remove dash (-) if mistakenly entered.
        this.cardNumber = this.cardNumber.split('-').join('');    
        if(this.cardNumber.length > 0)
          this.cardNumber = this.cardNumber.match(/.{1,4}/g).join('-');
      }
    }
  }
</script>

<style scoped>

.debit-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  margin: auto;
}

label {
  display: flex;
  text-align: left;
  margin: 1em 0 0.3em 0;
  color: #464555;
  font-size: 0.95rem;
  font-weight: 600;
}

input {
  border: 1.9px solid #D1D1D1;
  border-radius: 0.35em;
  padding: 0.8em;
  outline: none;
  width: 20rem;
  transition: all 0.1s ease-in-out;
  width: 100%;
}

input:focus {
  border: 1.9px solid #0069FF;
  box-shadow: 0 0 9.5px #0069FF99;
}

.row-1 {
  width: 100%;
  display: flex;
}

.expiry {
  display: flex;
  flex-direction: column;
}

.expiry-info input {
  width: 70px;
}

.expiry-info span {
  margin: 0 0.5em;
}

.cvv {
  display: flex;
  flex-direction: column;
  margin-left: 2em;
}

.cvv-code input {
  width: 70px;
}

.card-num span {
  text-align: left;
}

.row {
  display: flex;
  justify-content: center;
}

.payment-merchant {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.7em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
  width: 15em;
  border-radius: 0.7em;
  margin: 1em 0.5em;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
}

.payment-merchant:hover {
  transform: translateY(-5px);
}

.merchant-logo {
  width: 3em;
  height: auto;
  margin: 0 1em;
}

.payment-merchant img {
  width: 100%;
  height: 100%;
}

.submit-btn {
  background: linear-gradient(to bottom, #0069ff, #0066f8, #0063f1, #0061ea, #005ee3);
  color: #fff;
  font-weight: 600;
  margin: 1.5em 0 0.5em 0;
  cursor: pointer;
  padding: 0.7em 1em;
  border: none;
  border-radius: 0.35em;
  display: block;
  transition: all 0.2s ease-in-out;
  width: 70px;
}

.submit-btn:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
}

.spacer {
  width: 20%;
  margin: 0.8em auto;
}

.spacer span {
  overflow: hidden;
  text-align: center;
}

.spacer span:before,
.spacer span:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.spacer span:before {
  right: 1em;
  margin-left: -50%;
}

.spacer span:after {
  left: 1em;
  margin-right: -50%;
}

</style>