import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { firestorePlugin } from 'vuefire';
import {Vue} from "vue-class-component";

// Vue.use(firestorePlugin, {inject: false});

createApp(App).use(store).mount('#app')
