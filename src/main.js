import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBT2XjFCu7-RkYJeB4pzsVNRQcr0K1LiYU",
   authDomain: "vue-js-app-a2efd.firebaseapp.com",
   projectId: "vue-js-app-a2efd",
   storageBucket: "vue-js-app-a2efd.appspot.com",
   messagingSenderId: "785569086234",
   appId: "1:785569086234:web:12f240d1256c55f493caa3",
   measurementId: "G-RZEG0V0X4Q"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

new Vue({
  render: h => h(App),
}).$mount('#app')
