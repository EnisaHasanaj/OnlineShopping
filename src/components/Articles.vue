<template>
    <ul>
        <li v-for="value in object" v-bind:key="value.object">
            {{ value }}
        </li>
    </ul>
</template>

<script>



export default ({
    data:function() {
        return{
            object:{
                title:'Lajme nga bota',
                author:'Berat Buzhala',
                publishedAt:'07/12/2021'
            }
        }
        
    },
})
</script>
