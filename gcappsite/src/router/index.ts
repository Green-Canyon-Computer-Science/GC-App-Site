import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/announcement'
  },
  {
    path: '/poll',
    component: () => import ('../views/PollManager.vue')
  },
  {
    path: '/notification',
    component: () => import ('../views/NotificationManager.vue')
  },
  {
    path: '/announcement',
    component: () => import ('../views/AnnouncementManager.vue')
  },
  {
    path: '/monitor',
    component: () => import ('../views/MonitorManager.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
