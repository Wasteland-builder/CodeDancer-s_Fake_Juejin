import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/home/HomeView.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'HomeView',
    //     component: HomeView
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router