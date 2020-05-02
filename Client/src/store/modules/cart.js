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
    let indexToDelete = state.cart.indexOf(payload);
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
  addToCart({ commit, dispatch }, payload) {
    const notification = {
      type: 'success',
      message: 'Item added to cart'
    }
    dispatch('notification/add', notification, { root: true })
    commit('ADD_TO_CART', payload)
  },
  removeFromCart({ commit, dispatch }, payload) {
    const notification = {
      type: 'info',
      message: 'Item removed from cart'
    }
    dispatch('notification/add', notification, { root: true })
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