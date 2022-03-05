import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import store from "./store";
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false


const configOptions = {
  apiKey: "AIzaSyBT2XjFCu7-RkYJeB4pzsVNRQcr0K1LiYU",
  authDomain: "vue-js-app-a2efd.firebaseapp.com",
  projectId: "vue-js-app-a2efd",
  storageBucket: "vue-js-app-a2efd.appspot.com",
  messagingSenderId: "785569086234",
  appId: "1:785569086234:web:12f240d1256c55f493caa3",
  measurementId: "G-RZEG0V0X4Q"
};

firebase.initializeApp(configOptions)


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})


new Vue({
  router,
  store,
  firebase,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
