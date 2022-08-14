import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/home/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        children: [
            {
                path: '/recommended',
                name: 'RecView',
                component: () => import(/* webpackChunkName: "RecView" */ '../views/home/recommended/RecView.vue')
            },
            {
                path: '/following',
                name: 'Following',
                component: () => import(/* webpackChunkName: "Following" */ '../views/home/following/Following.vue')
            },
            {
                path: '/backend',
                name: 'Backend',
                component: () => import(/* webpackChunkName: "Backend" */ '../views/home/backend/Backend.vue')
            },
            {
                path: '/frontend',
                name: 'Frontend',
                component: () => import(/* webpackChunkName: "Frontend" */ '../views/home/frontend/Frontend.vue')
            },
            {
                path: '/android',
                name: 'Android',
                component: () => import(/* webpackChunkName: "Android" */ '../views/home/android/Android.vue')
            },
            {
                path: '/ios',
                name: 'Ios',
                component: () => import(/* webpackChunkName: "Ios" */ '../views/home/ios/Ios.vue')
            },
            {
                path: '/ai',
                name: 'Ai',
                component: () => import(/* webpackChunkName: "Ai" */ '../views/home/ai/Ai.vue')
            },
            {
                path: '/freebie',
                name: 'Freebie',
                component: () => import(/* webpackChunkName: "Freebie" */ '../views/home/freebie/Freebie.vue')
            },
            {
                path: '/career',
                name: 'Career',
                component: () => import(/* webpackChunkName: "Career" */ '../views/home/career/Career.vue')
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import(/* webpackChunkName: "Article" */ '../views/home/article/Article.vue')
            },
        ]
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
    },
    {
        path: "/post/:id",
        name: 'post',
        component: () => import('../views/post/index.vue')
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes
})

export default router