import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    }
  },
  modules: {
  }
})
