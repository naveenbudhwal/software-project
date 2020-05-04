<template>
  <div class="report-page">
    <h3><i class="fas fa-poll-h"></i> Sales Report</h3>
    <hr>
    <section>
      <h1>Fixed Table header</h1>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Order</th>
              <th>Feedback</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="(item,$itemIndex) in orders" :key="$itemIndex">
              <td>{{item.customerName}}</td>
              <td>{{item.customerMobile}}</td>
              <td>{{item.customerEmail}}</td>
              <td>
                <ul>
                  <li v-for="(order,$orderIndex) in item.order" :key="$orderIndex"> 
                    {{order.name}}
                  </li>
                </ul>
              </td>
              <td>{{item.feedback}}</td>
              <td>{{item.date}}</td>
              <td>{{item.time}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <router-link to="/admin">
      <i class="fas fa-arrow-alt-circle-left go-back"></i>
    </router-link>
  </div>
</template>

<script>
import RestaurantServices from '../services/RestaurantAPI.js'

export default {
  name: 'report',
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.loadOrders()
  },
  methods: {
    async loadOrders() {
      const response = await RestaurantServices.loadOrderItems()
      this.orders = response.data
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}

table {
  width:100%;
  table-layout: fixed;
}

.tbl-header {
  background-color: rgba(255,255,255,0.3);
 }

.tbl-content {
  /* overflow-x: auto; */
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
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

ul,li {
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}

.order-details {
  width: 400px;
  border: 2px solid #eee;
  border-radius: 10px;
  margin: 20px 0;
  padding: 15px;
}

.go-back {
  position: absolute;
  top: 17%;
  left: 5%;
  font-size: 35px;
}

hr {
  width: 30%;
}
</style>