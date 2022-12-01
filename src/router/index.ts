import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/home/presentation/ui/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
  ]
})

export default router
