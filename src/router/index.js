import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import( '../views/Portfolio.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import( '../views/Tools.vue')
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: () => import( '../views/Sandbox.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import( '../views/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
