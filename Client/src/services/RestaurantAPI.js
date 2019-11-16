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
  addToCart(item) {
    return API().post('addToCart', {
      item: item
    })
  },
  getCartItems() {
    return API().get('cartItems')
  },
  deleteCartItem(item) {
    return API().post('deleteCartItem', {
      item: item
    })
  }
}