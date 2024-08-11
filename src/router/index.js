import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // use dontShow:true to prevent from show in the nav bar
    {
      path: '/',
      name: 'home',
      nameAr: 'الرئيسية',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      nameAr: 'تواصل معي',
      component: () => import('../views/contactMe.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      nameAr: 'المشاريع',
      component: () => import('../views/allProjects.vue')
    },
    {
      path: '/project/:id',
      name: 'project',
      dontShow: true,
      component: () => import('../views/projectDetails.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      dontShow: true,
      redirect: {
        name: 'home'
      },
      name: 'NotFound',
      component: import('../views/notFound.vue')
    }
  ]
})

export default router
