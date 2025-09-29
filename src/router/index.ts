import useSessionStore from '@/stores/session'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/views/layout/AuthLayout.vue'),
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/RegisterView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const sessionStore = useSessionStore()
  if (to.meta.requiresAuth && !sessionStore.isAuthenticated) {
    return '/auth/login'
  }
})

export default router
