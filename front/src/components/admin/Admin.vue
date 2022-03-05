<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>
          <v-btn text v-on:click="changeBodyState('gamingstores')">
            Gaming Stores
          </v-btn>

        </div>
        <div>
          <v-btn
              left
              color="indigo"
              dark
              v-on:click="createres('UsersList')"

          >Users</v-btn>
          <v-btn
              left
              color="indigo"
              dark
              v-on:click="createres('AddProducts')"

          >Create New Product</v-btn>
          <v-btn
            right
            color="indigo"
            dark
            v-on:click="createres('CreateGamingStore')"
            v-if="this.gamingStoresOrGames === 'gamingstores'"
            >Create New Gaming Store</v-btn
          >
          <v-btn
            right
            color="indigo"
            dark
            v-on:click="createres('')"
            v-if="this.gamingStoresOrGames === 'games'"
            >Create New Game</v-btn
          >
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <template v-if="this.gamingStoresOrGames === 'gamingstores'">
        <GamingStores></GamingStores>
      </template>


      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import GamingStores from "@/components/admin/GamingStores/GamingStores";
export default {
  components: { GamingStores },
  data() {
    return {
      gamingStoresOrGames: "gamingstores",
    };
  },
  created(){
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
  },
  methods: {
    changeBodyState(name) {
      this.gamingStoresOrGames = name;
    },
    createres(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>


<style>
</style>