import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Chapitre0 from '@/views/Chapitre0.vue'
import Chapitre1 from '@/views/Chapitre1.vue'
import Chapitre2 from '@/views/Chapitre2.vue'
import Chapitre3 from '@/views/Chapitre3.vue'*/
import Content from '@/components/Content.vue'
import Intro from '@/components/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/introduction',
    name: 'introduction',
    component: Content
    //component: () => import('../views/Part0.vue')
  },
  {
    path: '/histoire-metisee',
    name: 'histoire-metisee',
    component: Content
    //component: () => import('../views/Part1.vue')
  },
  {
    path: '/usages',
    name: 'usages',
    component: Content
   // component: () => import('../views/Part2.vue')
  },
  {
    path: '/langage-non-verbal',
    name: 'langage-non-verbal',
    component: Content
    //   component: () => import('../views/Part3.vue')
  },
  {
    path: '/',
    component: Intro
  },
  {
    path: '/about',
    name: 'langage-non-verbaal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Content
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
