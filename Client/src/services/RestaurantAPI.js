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
  addOrderItems({ foodItems, billTotal, userName, currentTime, currentDate }) {
    return API().post('addOrder', {
      foodItems,
      billTotal,
      userName,
      currentTime,
      currentDate
    })
  },
  loadOrderItems() {
    return API().get('orderItems')
  },
  register({ name, email, password }) {
    return API().post('register', { name, email, password })
  },
  login({ email, password }) {
    return API().post('login', { email, password })
  },
  getUserDetails({ userEmail }) {
    return API().post('user', { userEmail })
  }
}