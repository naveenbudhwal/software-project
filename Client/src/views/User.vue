<template>
  <div>
    Past Orders

    <ul>
      <li 
        v-for="(order, $orderIndex) in auth.orders"
        :key="$orderIndex"
      >
      <hr>
      Bill total: {{ order.billTotal }}
        <ul>
          <li 
            v-for="(item, $itemIndex) in order.foodItems"
            :key="$itemIndex"
          >
            <img :src="item.image" alt="food item"> --- {{ item.name }} --- {{ item.qty }} --- {{ item.price }}
          </li>
        </ul>
      </li>
    </ul>
    <!-- {{ auth.user.orders[0].foodItems }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    if(this.auth.user.role === 'admin') {
      this.$router.replace('admin')
    } else {
      this.$store.dispatch('auth/getUserDetails', { root: true })
    }
  },
  computed: mapState(['auth'])
}
</script>

<style scoped>

</style>