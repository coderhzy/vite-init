import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/view/Index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/Login'),
  },
  {
    path: '/pinia-test',
    name: 'piniaTest',
    component: () => import('@/view/piniaTest'),
  },
  {
    path: '/native-ui',
    name: 'NativeUi',
    component: () => import('@/view/NativeUi'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router