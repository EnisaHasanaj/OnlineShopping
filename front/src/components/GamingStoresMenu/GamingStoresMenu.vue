<template>
  <!-- menu section -->
  <section id="menu" class="parallax-section">
    <div class="container">
      <div class="row images">
        <div class="col-md-offset-2 col-md-8 col-sm-12 text-center">
          <h1 class="heading">PLACES TO PLAY AND TO HAVE FUN...</h1>        </div>

              <div class="search_box">
                <input v-model="searchText" v-on:keyup.13="search()"  type="text" placeholder="Search any gaming store...">
                <i class="fas fa-search"></i>
              </div>
        <GamingStoresItem v-for="gamingStore in gamingStores" :key="gamingStore.id" :gamingStore="gamingStore"></GamingStoresItem>


      </div>
    </div>
  </section>
</template>

<script>
import GamingStoresItem from "@/components/GamingStoresMenu/GamingStoresItem";
import axios from "axios";

export default {
name: "GamingStoresMenu",
  components: {GamingStoresItem},
  methods: {
    search() {
    axios.get(`http://localhost:4000/gamingstores/search/${this.searchText}`).then( res =>
        this.gamingStores= res.data,
    ).catch();
  }
  },
  data(){
    return{
      searchText: null,
      gamingStores : [],
    }
  },
  created() {
    axios.get('http://localhost:4000/gamingstores').then( res =>
        this.gamingStores= res.data,
    ).catch();
  },
  

}
</script>

<style scoped>
</style>