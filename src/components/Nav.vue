<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        
    >
        <el-menu-item index="1">
            <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/about">About</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/blog">Blog</router-link>
        </el-menu-item>
    </el-menu>
    
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
</script>

<style lang="css">
    a{
        text-decoration: none;
    }
</style>    
