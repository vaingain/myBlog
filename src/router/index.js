import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {path:'/',component: Home, name:'home'},
    {path:'/about',component: About, name:'about'},
    {path:'/blog',component: Blog, name:'blog'},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router