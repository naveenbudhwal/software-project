import RestaurantServices from '../../services/RestaurantAPI'
import axios from 'axios'

export const namespaced = true

export const state = {
  user: null,
  orders: null
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    state.user = userData
  },
  SET_ORDER_DATA (state, userData) {
    state.orders = userData.orders
  },
  CLEAR_USER_DATA () {
    localStorage.removeItem('user')
    location.reload()
  }
}

export const actions = {
  async register ({ commit }, {name, email, password}) {
    const response = await RestaurantServices.register({name, email, password})
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  async login ({ commit }, { email, password}) {
    const response = await RestaurantServices.login({ email, password})
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  async getUserDetails ({ commit, state }) {
    const response = RestaurantServices.getUserDetails({ userEmail: state.user.email }).then((response) => {
      commit('SET_ORDER_DATA', response.data)
    }) 
  },
  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

export const getters = {
  loggedIn (state) {
    return !!state.user
  }
}