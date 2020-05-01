export const namespaced = true

export const state = {
  cart: [],
  billTotal: 0
}

export const mutations = {
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
}

export const actions = {
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
}

export const getters = {
  cartLength(state) {
    return state.cart.length
  }
}