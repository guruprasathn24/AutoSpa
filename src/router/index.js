import { createRouter, createWebHistory } from 'vue-router'

// Component Imports
import Home from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import ServicePage from '../components/ServicePage.vue'
import PackagePage from '../components/PackagePage.vue'
import GalleryPage from '../components/GalleryPage.vue' 
import ContactPage from '@/components/ContactPage.vue'


const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: LoginPage 
  },
  { 
    path: '/services', 
    name: 'Services', 
    component: ServicePage 
  },
  { 
    path: '/packages', 
    name: 'Package', 
    component: PackagePage 
  },
  { 
    path: '/gallery', 
    name: 'Gallery', 
    component: GalleryPage 
  },
  {
    path:'/contact',
    name:'contact',
    component:ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
