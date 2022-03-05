<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>

        </div>
        <div>
          <v-btn right color="indigo" dark v-on:click="createres('Admin')"
          >Go back</v-btn>
        </div>
      </div>
    </v-app-bar>
      <div class="table-parent" style="margin-top: 100px">
        <h1 class="title">Users List</h1>
        <v-simple-table class="urant-parent">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
          <template>
            <thead>
            <tr>
              <th class="text-left">Username</th>
              <th class="text-left">Email</th>
              <th class="text-left">Role</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="res in users" :key="res._id" class="tbody-table">
              <td>{{ res.username }}</td>
              <td>{{ res.email }}</td>
              <td>{{ res.role }}</td>
              <td>
                <v-card-actions>
<!--                  <v-btn color="blue darken-1" dark v-on:click="deactivate(res)"-->
<!--                  >Activate</v-btn-->
<!--                  >-->
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

  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersList",
  data() {
    return {
      users: [],
    };
  },
  created() {
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
    axios
        .get('http://localhost:4000/users')
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch();
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    createres(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
    deleteres(user) {
      const index = this.users.indexOf(user);
      confirm("Are you sure you want to delete this User?") &&
      this.users.splice(index, 1);
      axios
          .delete("http://localhost:4000/users/" + user._id)
          .then((res) => {
            // this.$router.go();
            return res;
          })
          .catch();
    },
  }
};
</script>

<style>
</style>