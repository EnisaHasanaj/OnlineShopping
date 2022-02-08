import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT2XjFCu7-RkYJeB4pzsVNRQcr0K1LiYU",
  authDomain: "vue-js-app-a2efd.firebaseapp.com",
  projectId: "vue-js-app-a2efd",
  storageBucket: "vue-js-app-a2efd.appspot.com",
  messagingSenderId: "785569086234",
  appId: "1:785569086234:web:0214e996c758d8dd93caa3",
  measurementId: "G-91FBHZMR24"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

