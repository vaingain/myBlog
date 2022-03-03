<template>
    <div><router-link to="/">Home</router-link></div>
    <div><router-link to="/about">About</router-link></div>
    <div><router-link to="/blog">Bolg</router-link></div>
    <div><router-link to="/helloworld">HelloWord</router-link></div>
</template>

<script setup>
    import {useRoute,useRouter} from 'vue-router'
    let route = useRoute()
    let router = useRouter()
</script>

<style scoped>

</style>
