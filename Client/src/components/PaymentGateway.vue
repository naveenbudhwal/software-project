<template>
  <div class="payment">
    <div class="debit-card">
      <div class="card-name">
        <p>Name on card:</p>
        <input type="text">
      </div>
      <div class="card-num">
        <p>Card Number:</p>
        <input type="text">
      </div>
      <div class="expiry">
        <p>Expiry Date:</p>
        <input type="text" placeholder="MM"> /
        <input type="text" placeholder="YY">
      </div>
      <div class="cvv-code">
        <p>CVV:</p>
        <input type="password">
      </div>
      <div class="submit-btn">
        <button>Pay</button>
      </div>
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
    name: 'payment-gateway'
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

.debit-card div {
  margin: 0.5em 0;
}

.debit-card p {
  text-align: left;
}

input {
  border: none;
  background: #e1e1e1;
  border-radius: 0.3em;
  margin: 0.3em 0;
  padding: 0.5em 0.8em;
  outline: none;
  width: 20rem;
  transition: all 0.1s ease-in-out;
}

input:focus {
  border: 2px solid #2b70dc;
}

.card-num span {
  text-align: left;
}

.expiry input {
  width: 4em;
}

.cvv-code input {
  width: 4em;
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

.submit-btn button {
  border: none;
  background: #2b70dc;
  color: #fff;
  padding: 0.5em 1em;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 0.3em;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}

.submit-btn button:hover {
  transform: translate(-0.7px, -0.7px);
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}

.spacer {
  width: 20%;
  margin: auto;
  margin: 0.5em auto;
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