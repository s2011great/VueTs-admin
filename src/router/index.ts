import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/index.vue'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '',
    component: Layout,
    name: 'home',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      }
    ],
  },
]

export default new Router({
  scrollBehavior: () => { y: 0 },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
})