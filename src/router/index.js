import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('../layout/index.vue'),
    redirect: '/home',
    children: [
        {
            name: '首页',
            path: 'home',
            component: () => import('../views/Home.vue')
        }, {
            name: '关于',
            path: 'about',
            component: () => import('../views/About.vue')
        }
    ]
}, {
    path: '/login',
    component: () => import('../layout/blank.vue'),
    children: [
        {
            path: '',
            component: () => import('../views/Login.vue')
        }
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router