import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    name: '首页',
    path: '/',
    component: () => import('../views/Home.vue')
}, {
    name: '关于',
    path: '/about',
    component: () => import('../views/About.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router