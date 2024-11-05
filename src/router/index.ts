import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index/HomeView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/index/ContactView.vue'),
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('@/views/index/DiscoverView.vue'),
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/index/MeView.vue'),
    },
  ],
})

export default router
