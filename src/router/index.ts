import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {asyncRouterMap} from "@/config/config.router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登陆', hidden: true, },
    component: () => import('@/views/user/login.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[...routes,...asyncRouterMap]
})

export default router
