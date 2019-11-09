import API from './API.js'

export default {
  getMenuItems() {
    return API().get('todo')
  }
}