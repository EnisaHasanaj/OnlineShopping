<template>
  <div id="app">
    <!-- <header></header> -->
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/secret">Secret</router-link>
    </div>
    <router-view />
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
