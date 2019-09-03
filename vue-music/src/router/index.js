import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../views/recommend.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('../views/singer.vue')
    },
    {
      path: '/disc/:id',
      name: 'disc',
      component: () => import('../views/disc.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})
