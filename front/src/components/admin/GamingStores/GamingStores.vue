<template  v-slot:default>
  <div class="table-parent">
    <h1 class="title">Gaming Stores List</h1>
    <v-simple-table class="urant-parent">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <template>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
            <th class="text-left">Location</th>
            <th class="text-left">Description</th>
            <th class="text-left">Phone Number</th>
            <th class="text-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in gamingStores" :key="res._id" class="tbody-table">
            <td><img v-if="res.images[0]" height="40px" width="40px" v-bind:src="res.images[0].url" /> </td>
            <td>{{ res.name }}</td>
            <td>{{ res.location[0].city }},{{ res.location[0].street }}</td>
            <td>{{ res.description }}</td>
            <td>{{ res.telephone }}</td>
            <td>
              <v-card-actions>
              <v-btn color="blue darken-1" dark v-on:click="editres(res)"
                >Edit</v-btn
              >
              <v-btn color="red darken-1" dark v-on:click="deleteres(res)"
                >Delete</v-btn
              >
            </v-card-actions>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
  <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions> -->
</template>

<script>
import axios from "axios";

export default {
  name: "GamingStores",
  data() {
    return {
      gamingStores: [],
    };
  },
  created() {
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
    axios
      .get("http://localhost:4000/gamingstores")
      .then((res) => (this.gamingStores = res.data))
      .catch();

  },
  methods: {
    editres(gamingstore) {
      // console.log(restaurant._id);
      this.$router.push({
        name: "EditGamingStores",
        params: { id: gamingstore._id },
      });
    },
    deleteres(gamingstore) {
      const index = this.gamingStores.indexOf(gamingstore);
      confirm("Are you sure you want to delete this Gaming Store?") &&
        this.gamingStores.splice(index, 1);
      axios
        .delete("http://localhost:4000/gamingstores/" + gamingstore._id)
        .then((res) => {
          this.$router.go();
          return res;
        })
        .catch();
    },
    createres() {
      this.$router.push({
        name: "CreateGamingStore",
      });
    },
  },
};
</script>

<style scoped>
.text-left{
  font-family:monospace;
}
</style>