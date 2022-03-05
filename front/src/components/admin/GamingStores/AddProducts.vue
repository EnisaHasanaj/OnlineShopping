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
    <div class="parent-form">
      <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit">

        <v-select
            v-model="selectedGamingStore"
            :items="this.gamingStoresList"
            item-text="name"
            item-value="_id"
            append-outer-icon="mdi-map"
            menu-props="auto"
            hide-details
            label="Select"
            single-line
        ></v-select>

        <v-text-field
            v-model="product.name"
            :rules="nameRules"
            label="Name"
            required

        ></v-text-field>
        <v-text-field
            v-model="product.price"
            label="Price"
            required

        ></v-text-field>

        <v-text-field
            v-model="product.description"
            label="Description"
            required
        ></v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="onSubmit"
        >
          Add Product
        </v-btn>
        <!-- <v-btn color="error" class="mr-4" @click="reset"> Reseto Formen </v-btn> -->
      </v-form>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "EditGamingStores",
  data() {
    return {
      product: {name: null, description: null, price: null},
      valid: true,
      selectedGamingStore: null,
      gamingStoresList: [],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  created() {
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
    axios
        .get('http://localhost:4000/gamingstores')
        .then((res) => {
          console.log(res.data);
          this.gamingStoresList = res.data;
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
    onSubmit(evt) {
      console.log(this.selectedGamingStore)
      const product = {
        name: this.product.name,
        price: this.product.price,
        description: this.product.description
      }

      evt.preventDefault();
        axios
            .post(
                `http://localhost:4000/gamingstores/` + this.selectedGamingStore +"/product",
                product,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
            )
            .then((response) => {
              // console.log(response)

              this.$router.push({
                name: "Admin",
              });
              return response;
            })
            .catch();
    },
  },
};
</script>

<style>
</style>