import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../components/homepage.vue';
import aboutus from '../components/aboutus.vue';
import alumni from '../components/alumni.vue';
import events from '../components/events.vue';
import contactus from '../components/contactus.vue';
import courses from '../components/courses.vue';
import library from '../components/library.vue';
import partnership from '../components/partnership.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/alumni',
      name: 'alumni',
      component: alumni
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
      path: '/library',
      name: 'library',
      component: library
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: partnership
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
