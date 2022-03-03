<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item index="1">
            <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/about">About</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/blog">Bolg</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <router-link to="/helloworld">HelloWord</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
</script>
