import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Home',
      name: 'Home Page',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/',
      redirect: '/Home',
    },
  ],
})

export default router
