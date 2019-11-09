import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from '../node_modules/firebase'

Vue.config.productionTip = false

let app = ''

const firebaseConfig = {
  apiKey: "AIzaSyDEg957RQjBpBu-P6RE44cHekXxVCt_foc",
  authDomain: "software-project-c974a.firebaseapp.com",
  databaseURL: "https://software-project-c974a.firebaseio.com",
  projectId: "software-project-c974a",
  storageBucket: "software-project-c974a.appspot.com",
  messagingSenderId: "903692250767",
  appId: "1:903692250767:web:7d4138ba5838dd7f0d4afa",
  measurementId: "G-YJHFNZHV5G"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
