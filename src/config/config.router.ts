import { RouteRecordRaw } from 'vue-router'
export const asyncRouterMap:Array<RouteRecordRaw> =[
  {
    path: "/",
    name: 'amin',
    meta: { title: "后台管理" },
    component: () => import('@/layout/index.vue'),
    children: [
      // 首页-dashboard
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/workplace.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/admins',
        name: 'admins',
        meta: { title: '控制台' },
        component: () => import('@/layout/view/content.vue'),
        children: [
          {
            path: '/About',
            name: 'About',
            component: () => import('@/views/About.vue'),
            meta: { title: '个人信息' },
          },
          {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
            meta: { title: '权限' }
          }
        ]
      },
    ]
  }
]
