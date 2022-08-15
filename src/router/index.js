import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/home/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        redirect: '/recommended',
        children: [
            {
                path: '/recommended',
                name: 'RecView',
                component: () => import(/* webpackChunkName: "RecView" */ '../views/home/recommended/RecView.vue'), 
                meta: {
                    title: '推荐 - 文章 - 掘金'
                }
            },
            {
                path: '/following',
                name: 'Following',
                component: () => import(/* webpackChunkName: "Following" */ '../views/home/following/Following.vue'), 
                meta: {
                    title: '关注 - 文章 - 掘金'
                }
            },
            {
                path: '/backend',
                name: 'Backend',
                component: () => import(/* webpackChunkName: "Backend" */ '../views/home/backend/Backend.vue'), 
                meta: {
                    title: '后端 - 掘金'
                }
            },
            {
                path: '/frontend',
                name: 'Frontend',
                component: () => import(/* webpackChunkName: "Frontend" */ '../views/home/frontend/Frontend.vue'), 
                meta: {
                    title: '前端 - 掘金'
                }
            },
            {
                path: '/android',
                name: 'Android',
                component: () => import(/* webpackChunkName: "Android" */ '../views/home/android/Android.vue'), 
                meta: {
                    title: 'Andriod - 掘金'
                }
            },
            {
                path: '/ios',
                name: 'Ios',
                component: () => import(/* webpackChunkName: "Ios" */ '../views/home/ios/Ios.vue'), 
                meta: {
                    title: 'iOS - 掘金'
                }
            },
            {
                path: '/ai',
                name: 'Ai',
                component: () => import(/* webpackChunkName: "Ai" */ '../views/home/ai/Ai.vue'), 
                meta: {
                    title: '人工智能 - 掘金'
                }
            },
            {
                path: '/freebie',
                name: 'Freebie',
                component: () => import(/* webpackChunkName: "Freebie" */ '../views/home/freebie/Freebie.vue'), 
                meta: {
                    title: '开发工具 - 掘金'
                }
            },
            {
                path: '/career',
                name: 'Career',
                component: () => import(/* webpackChunkName: "Career" */ '../views/home/career/Career.vue'), 
                meta: {
                    title: '代码人生 - 掘金'
                }
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import(/* webpackChunkName: "Article" */ '../views/home/article/Article.vue'), 
                meta: {
                    title: '阅读 - 掘金'
                }
            },
        ], 
        meta: {
            title: '掘金'
        }
    },
    {
        path: '/hot',
        name: 'HotView',
        component: () => import(/* webpackChunkName: "HotView" */ '../views/hot/HotView.vue'), 
        meta: {
            title: '沸点 - 掘金'
        }
    },
    {
        path: '/course',
        name: 'CourseView',
        component: () => import(/* webpackChunkName: "CourseView" */ '../views/course/CourseView.vue'), 
        meta: {
            title: '掘金课程'
        }
    },
    {
        path: '/live',
        name: 'LiveView',
        component: () => import(/* webpackChunkName: "LiveView" */ '../views/live/LiveView.vue'), 
        meta: {
            title: '直播 - 掘金'
        }
    },
    {
        path: '/events',
        name: 'EventsView',
        component: () => import(/* webpackChunkName: "EventsView" */ '../views/events/EventsView.vue'), 
        meta: {
            title: '开发者活动 - 掘金'
        }
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
    routes,
    linkActiveClass: 'router--active'
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router