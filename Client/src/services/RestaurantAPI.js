import API from './API.js'

export default {
  getMenuItems() {
    return API().get('menuItems')
  },
  addMenuItems(item) {
    return API().post('addMenuItem', {
      item: item
    })  
  },
  deleteMenuItem(item) {
    return API().post('deleteMenuItem', {
      item: item
    })
  },
  addOrderItems(order, info) {
    return API().post('addOrder', {
      order: order,
      info: info
    })
  },
  loadOrderItems() {
    return API().get('orderItems')
  }
}