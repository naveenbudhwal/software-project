import Vue from 'vue'
import Vuex from 'vuex'
import RestaurantServices from '../services/RestaurantAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [],
    cart: [],
    billTotal: 0
  },
  mutations: {
    LOAD_MENU_ITEMS(state, payload) {
      state.menuItems = payload
    },
    ADD_TO_CART(state, payload) {
      state.cart.push(payload)
    },
    REMOVE_FROM_CART(state, payload) {
      state.billTotal = state.billTotal - payload.price
      var indexToDelete = state.cart.indexOf(payload);
      state.cart.splice(indexToDelete, 1);
    },
    SET_BILL_TOTAL(state, payload) {
      state.billTotal = payload
    },
    EMPTY_CART(state, payload) {
      state.cart.splice(0, state.cart.length)
    }
  },
  actions: {
    async loadMenu({ commit }) {
      const response = await RestaurantServices.getMenuItems();
      commit('LOAD_MENU_ITEMS', response.data)
    },
    addToCart({ commit }, payload) {
      commit('ADD_TO_CART', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('REMOVE_FROM_CART', payload);
    },
    calcBillTotal({ commit, state }) {
      let billTotal = 0
      state.cart.forEach(item => {
        billTotal = Number(billTotal) + Number(item.price)
      });
      commit('SET_BILL_TOTAL', billTotal)
    },
    emptyCart({ commit }, payload) {
      commit('EMPTY_CART', payload)
    }
  },
  getters: {
    cartLength(state) {
      return state.cart.length
    }
  },
  modules: {
  }
})
