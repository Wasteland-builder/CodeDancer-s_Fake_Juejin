import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/home/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/hot',
        name: 'HotView',
        component: () => import(/* webpackChunkName: "HotView" */ '../views/hot/HotView.vue')
    },
    {
        path: '/course',
        name: 'CourseView',
        component: () => import(/* webpackChunkName: "CourseView" */ '../views/course/CourseView.vue')
    },
    {
        path: '/live',
        name: 'LiveView',
        component: () => import(/* webpackChunkName: "LiveView" */ '../views/live/LiveView.vue')
    },
    {
        path: '/events',
        name: 'EventsView',
        component: () => import(/* webpackChunkName: "EventsView" */ '../views/events/EventsView.vue')
    },
    {
        path: '/show',
        name: 'ShowView',
        component: () => import(/* webpackChunkName: "ShowView" */ '../views/show/ShowView.vue')
    },
    {
        path: '/app',
        name: 'AppView',
        component: () => import(/* webpackChunkName: "AppView" */ '../views/app/AppView.vue')
    },
    {
        path: '/extension',
        name: 'ExtView',
        component: () => import(/* webpackChunkName: "ExtView" */ '../views/extension/ExtView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router