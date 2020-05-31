import Vue from 'vue'
import Vuex from 'vuex'
import * as menu from '@/store/modules/menu'
import * as cart from '@/store/modules/cart'
import * as auth from '@/store/modules/auth'
import * as notification from '@/store/modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    cart,
    auth,
    notification
  },
  state: {
   
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {

  }
})
