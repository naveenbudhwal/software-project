<template>
  <div>
    <h1><i class="fas fa-users-cog"></i> Welcome back {{ auth.user.name }}</h1>
    <hr class="heading-hr">
    <router-link to="/admin/add-menu-items">
      <i class="fas fa-plus-circle add-menu-items"></i>
    </router-link>
    <div class="heading">
      <div class="item-delete-heading">Delete</div>
      <div class="item-image-heading">Image</div>
      <div class="item-name-heading">Item</div>
      <div class="item-price-heading">Price</div>
    </div>
    <hr class="body-hr">
    <ul>
      <li v-for="(item,index) in menu.menuItems" :key="index">
        <div class="menu-body">
          <div class="delete-item" @click="deleteItems(item)">
            <i class="fas fa-minus-circle"></i>
          </div>
          <div class="menu-items">
            <img :src="item.image" alt="Image of food">
            <div class="item-name">{{item.name}}</div>
            <div class="price">{{item.price}}</div>
          </div>
        </div>
      </li>
    </ul>
    <router-link to="/admin/report">
      <button class="report">Generate Sales report</button>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'

export default {
  name: 'admin',
  mounted() {
    this.loadMenuItems();
  },
  methods: {
    loadMenuItems() {
      this.$store.dispatch('menu/loadItems', null, { root:true })  
    },
    deleteItems(item) {
      this.$store.dispatch('menu/deleteItem', item, { root: true })
    }
  },
  computed: {
    ...mapState(['menu']),
    ...mapState(['auth'])
  }
}
</script>

<style scoped>

ul,li {
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}

.heading {
  display: flex;
  width: 600px;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.1em;
}

.item-name-heading {
  flex: 0.9;
}

.item-image-heading {
  flex: 1;
}

.item-price-heading {
  flex: 0.7;
}

.menu-body {
  display: flex;
  width: 600px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.menu-items {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 2px solid #ddd;
  border-radius: 10px; */
  width: 700px;
  margin: 10px auto;
}

.delete-item {
  cursor: pointer;
}

.delete-item i {
  font-size: 25px;
  color: #d11a2a;
}

button {
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-weight: 500;
  transition: background 0.2s ease-in-out;
}

i.add-menu-items {
  color: #1DB954;
  font-size: 65px;
  transition: color 0.2s ease-in-out;
  position: fixed;
  right: 5%;
  bottom: 5%;
  border-radius: 100%;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}

i.add-menu-items:hover {
  color: #009433;
}

.report {
  background: #1DB954;
  margin: 20px 0;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px;
}

.report:hover {
  background: #009433;
}

.heading-hr {
  width: 30%;
}

.body-hr {
  width: 45%;
}
</style>