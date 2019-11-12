import API from './API.js'

export default {
  getMenuItems() {
    return API().get('menuItems')
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