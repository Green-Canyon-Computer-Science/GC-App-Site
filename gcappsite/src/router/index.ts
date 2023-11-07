import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Announcement%20Manager'
  },
  {
    path: '/Poll%20Manager',
    component: () => import ('../views/PollManager.vue')
  },
  {
    path: '/Notification%20Manager',
    component: () => import ('../views/NotificationManager.vue')
  },
  {
    path: '/Announcment%20Manager',
    component: () => import ('../views/AnnouncementManager.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
