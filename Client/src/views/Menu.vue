<template>
  <div class="menu">
    <h1>Menu</h1>
    <div class="cart">
    </div>
    <hr class="minimal">
    <div class="menu-items">
      <ul>
        <li v-for="(item,index) in menu.menuItems" :key="index">
          <div class="body">
            <img class="item-image" :src="item.image" alt="Image of food">
            <div class="item-name">{{item.name}}</div>
            <div class="price"><span class="rupee">₹</span> {{item.price}}</div>
            <button @click="addToCart(item)">Add +</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CounterBadge from '../components/CounterBadge.vue';
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'menu-items',
  components: { CounterBadge },
  created() {
    this.loadMenuItems();
  },
  methods: {
    loadMenuItems() {
      this.$store.dispatch('menu/loadItems', null, { root:true })  
    },
    addToCart(item) {
      this.$store.dispatch('cart/addToCart', item, { root: true })
    }
  },
  computed: {
    ...mapState(['menu']),
    ...mapGetters('cart', ['cartLength'])
  }
}
</script>

<style scoped>
.menu {
  font-family: 'Montserrat', sans-serif;
}

.menu-items {
  display: flex;
  margin: 0 auto;
  width: 1080px;
  margin-bottom: 5%;
}

.menu-items ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-items ul li {
  margin: 20px 60px;
  width: 150px;
  height: auto;
  float: left;
}

.menu-items ul li .body img.item-image {
  width: 180px;
  height: auto;
}

.item-name {
  font-size: 1.2em;
  margin: 15px 0 8px 0;
  font-weight: 500;
}

.price {
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 10px;
}

.price .rupee img {
  width: 13px;
  height: auto;
}

button {
  padding: 10px 15px;
  background: #fff;
  border: 1.5px solid #287900;
  color: #287900;
  border-radius: 40px;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background: #287900;
  color: #fff;
}

.minimal {
  height: 6px;
  width: 20%;
  background: #2b70dc;
  border-radius: 10px;
}
</style>