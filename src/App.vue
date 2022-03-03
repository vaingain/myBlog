<script setup>
import {useRoute,useRouter} from 'vue-router'
import Nav from './components/Nav.vue'
let route = useRoute()
let router = useRouter()
</script>

<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<style>
  body{
        background-color: #666666;
    }
</style>
