<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>
          <v-btn text>Gaming Stores</v-btn>
        </div>
        <div>
          <v-btn right color="indigo" dark v-on:click="createres('Admin')"
            >Go back</v-btn>
        </div>
      </div>
    </v-app-bar>
    <div class="parent-form">
      <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit">
        <v-text-field
          v-model="gamingStore.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          class="input-form"
          required
        ></v-text-field>
        <v-text-field
          v-model="gamingStore.description"
          label="Description"
          required
        ></v-text-field>

 <v-file-input
          v-model="image"
          show-size
          counter
          multiple
          label="Image"
        ></v-file-input>

        <v-text-field
          v-model="gamingStore.location[0].city"
          label="City"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="gamingStore.location[0].street"
          label="Street"
          required
        ></v-text-field>

        <v-text-field
          v-model="gamingStore.telephone"
          :counter="9"
          :rules="telRules"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="gamingStore.hours[0].from"
          label="Orari Prej"
          required
        ></v-text-field>
        <v-text-field
          v-model="gamingStore.hours[0].to"
          label="Orari Deri"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="onSubmit"
        >
          Add GamingStore
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Rest Form </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateGamingStore",
  created(){
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
  },
  data() {
    return {
      image: null,
      gamingStore: {
        name: "",
        description: "",
        images: [
          {
            public_id: "gamingstores/dwameeok2nr3okr33",
            url:
              "https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg",
          },
        ],
        location: [
          {
            city: "",
            street: "",
          },
        ],
        telephone: "",
        hours:[
          {
            from:'',
            to:''
          }
        ]
      },
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [(v) => !!v || "Description is required"],
      telRules: [
        (v) => !!v || "Telephone is required",
        (v) =>
          (v && v.length <= 9 && v.length >= 9) ||
          "Telephone must be 9 numbers",
      ],
    };
  },
  methods: {
    onSubmit(evt) {
      this.$refs.form.validate();

      // let gamingStore = {
      //   "iamge": this.gamingStore.image,
      //   "name": this.gamingStore.name,
      //   "description": this.gamingStore.description,
      //   "location_city": this.gamingStore.location[0].city,
      //   "location_street": this.gamingStore.location[0].street,
      //   "telephone": this.gamingStore.telephone,
      //   "hours_from":  this.gamingStore.hours[0].from,
      //   "hours_to" : this.gamingStore.hours[0].to
      // }

      var formData = new FormData();
      formData.append("name", this.gamingStore.name);
      formData.append("description", this.gamingStore.description);
      formData.append("image", this.image[0]);
      formData.append(
        "images_public_id",
        this.gamingStore.images[0].public_id
      );
      formData.append("images_url", this.gamingStore.images[0].url);
      formData.append(
        "location_city",
        this.gamingStore.location[0].city
      );
      formData.append(
        "location_street",
        this.gamingStore.location[0].street
      );
      formData.append("telephone", this.gamingStore.telephone);
      formData.append("hours_from", this.gamingStore.hours[0].from);
      formData.append("hours_to", this.gamingStore.hours[0].to);

      evt.preventDefault();
      axios
        .post(`http://localhost:4000/gamingstores`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$router.push({
            name: "Admin",
          });
        })
        .catch();
    },
    reset() {
      this.$refs.form.reset();
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