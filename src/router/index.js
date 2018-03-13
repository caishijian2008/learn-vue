import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import refnexttick from '@/components/day4/refnexttick'
import fathertoson from '@/components/day4/fatherToson/father'
import sontofather from '@/components/day4/sonTofather/father'
import syncmod from '@/components/day4/sync/father'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '', component: index},
    {
      path: '/',
      name: 'index',
      component: index
    },
    {path: '/refnexttick', component: refnexttick},
    {path: '/fathertoson', component: fathertoson},
    {path: '/sontofather', component: sontofather},
    {path: '/sync', component: syncmod},
    {path: '*', redirect: 'index'}
  ]
})
