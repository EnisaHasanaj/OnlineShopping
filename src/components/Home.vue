<template>
<div>
    <app-server-status></app-server-status>
    <app-server-status></app-server-status>
    <h2>Props from APP.VUE</h2>
    <ol>
        <li v-for="(item, index) in web" v-bind:key="index">{{ item }}</li>
    </ol>
</div>
</template>
<script>
import ServerStatus from './ServerStatus.vue'
export default{
    components:{
        'app-server-status': ServerStatus
    },props:{
        web: Array
    }
}
</script>
