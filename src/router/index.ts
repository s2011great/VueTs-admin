import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/index.vue'

Vue.use(Router);

/**
 * hidden: true  这个路由不在侧边导航栏sidebar中显示
 * alwaysShow: true  表示路由必须显示，无论有没有children项
 */

 // 静态路由
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index.vue'),
  },
]

export default new Router({
  scrollBehavior: () => { y: 0 },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
})

// 动态路由，需要后端返回路由表然后对比生成
export const asyncRoutes = [
  {
    path: '',
    component: Layout,
    name: 'home',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'home' }
      }
    ],
  },
  {
    path: '/system',
    component: Layout,
    name: 'system',
    redirect: '/system/org',
    meta: { title: 'system' },
    children: [
      {
        path: 'org',
        component: () => import('@/views/org/index.vue'),
        name: 'org',
        meta: { title: 'org' }
      },
      {
        path: 'dict',
        component: () => import('@/views/dict/index.vue'),
        name: 'dict',
        meta: { title: 'dict' }
      },
      {
        path: 'actor',
        component: () => import('@/views/actor/index.vue'),
        name: 'actor',
        meta: { title: 'actor' }
      },
      {
        path: 'user',
        component: () => import('@/views/user/index.vue'),
        name: 'user',
        meta: { title: 'user' }
      },
      {
        path: 'permission',
        component: () => import('@/views/permission/index.vue'),
        name: 'permission',
        meta: { title: 'permission' }
      }
    ],
  },
]