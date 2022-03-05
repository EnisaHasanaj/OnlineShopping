<template>
  <div class="col-md-6 col-sm-6">
    <h4>{{ this.gamingStore.name }}</h4>
    <span><img v-if="this.gamingStore.images[0]" :src="this.gamingStore.images[0].url"></span>
    <h4>{{ this.gamingStore.hours[0].from + " " + this.gamingStore.hours[0].to }}</h4>
  </div>
</template>

<script>
export default {
name: "GamingStoresItem",
  props : ['gamingStore']
}
</script>

<style scoped>

</style>