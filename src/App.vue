<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <app-header></app-header>
    <button @click="selectedComponent = 'app-about'">About</button>
    <button @click="selectedComponent = 'app-contact'">Contact</button>
    <component :is="selectedComponent"></component>
    <app-home v-bind:web="web"></app-home>
    <app-articles></app-articles>
    <app-footer></app-footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Articles from './components/Articles.vue'
//import ServerStatus from './components/ServerStatus.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    //'app-hello-world':HelloWorld,
    'app-header':Header,
    'app-footer':Footer,
    'app-articles':Articles,
    //'app-server-status':ServerStatus
    'app-home':Home,
    'app-about':About,
    'app-contact':Contact
  },
  data:function(){
    return{
    selectedComponent:'app-about',
    web: ['HTML','PHP','Javascript','VueJS']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
