import RestaurantServices from '@/services/RestaurantAPI'

export const namespaced = true

export const state = {
  menuItems: [],
  isNewItemAdded: false
}

export const mutations = {
  LOAD_MENU_ITEMS (state, payload) {
    state.menuItems = payload
  },
  NEW_ITEM_ADDED (state) {
    state.newItemAdded = true
  },
  ITEM_ADDED (state) {
    state.isNewItemAdded = false
  }
}

export const actions = {
  async loadItems ({ state, commit }) {
    if (state.menuItems.length === 0 || state.isNewItemAdded) {
      const response = await RestaurantServices.getMenuItems();
      commit('LOAD_MENU_ITEMS', response.data)
      commit('ITEM_ADDED')
    } else {  
      return
    }
  },
  deleteItem ({ state }, item) {
    RestaurantServices.deleteMenuItem(item)
      state.menuItems = state.menuItems.filter(function(obj) {
        return obj.name !== item.name;
      });
  },
  async addItem({ commit }, item) {
    const response = await RestaurantServices.addMenuItems(item)
    commit('NEW_ITEM_ADDED')
    dispatch('loadItems')
  }
}