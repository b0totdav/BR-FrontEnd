import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: () => import('../views/Tasks.vue'),
    },
    {
      path: '/edit',
      name: 'editTask',
      component: () => import('../views/EditTasks.vue'),
    },
    {
      path: '/new',
      name: 'newTask',
      component: () => import('../views/NewTasks.vue'),
    }
  ],
})

export default router
