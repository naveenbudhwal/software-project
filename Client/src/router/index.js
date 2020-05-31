import firebase from 'firebase'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import AddItems from '../views/AddItems.vue'
import Order from '../views/Order.vue'
import Payment from '../views/Payment.vue'
import Report from '../views/Report.vue'
import RegisterUser from '../views/RegisterUser.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/login'
  // },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu

  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  // {
  //   path: '/add-menu-items',
  //   name: 'addItems',
  //   component: AddItems
  // },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/add-menu-items',
    name: 'addMenuItems',
    component: AddItems,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/report',
    name: 'report',
    component: Report,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '*',
    redirect: {name: '404', params: {resource: 'page'}}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if(requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('admin')
//   else next();
// })

router.beforeEach((to, from , next) => {
  const loggedIn = localStorage.getItem('user')

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  }
  next()
})

export default router
