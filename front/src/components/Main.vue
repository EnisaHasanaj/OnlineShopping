<template>
  <div class="hello">

    <Navbar></Navbar>

    <SearchEverything></SearchEverything>

    <Gallery></Gallery>

    <GamingStoresMenu></GamingStoresMenu>

    <GamingStoresRating></GamingStoresRating>

    <Contact></Contact>

    <Footer></Footer>

    <Copyright></Copyright>

  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue';
import Navbar from "@/components/Navbar";
import SearchEverything from "@/components/SearchEverything";
import Gallery from "@/components/FoodGallery/Gallery";
import GamingStoresMenu from "@/components/GamingStoresMenu/GamingStoresMenu";
import GamingStoresRating from "@/components/GamingStoresRating";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default {
  name: 'Main',
  components: {Copyright, Footer, Contact, GamingStoresRating, GamingStoresMenu, Gallery, SearchEverything, Navbar},
  props: {
    msg: String
  },
  comments:{
    Navbar,
  },
  data(){
    return{
      message : 'Hello',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
