import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Blog from '../components/Blog.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {path:'/',component: Home, name:'home'},
    {path:'/about',component: About, name:'about'},
    {path:'/blog',component: Blog, name:'blog'},
    {path:'/helloworld',component: HelloWorld, name:'helloworld'},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router