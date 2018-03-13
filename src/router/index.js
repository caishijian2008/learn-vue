import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import refnexttick from '@/components/day4/refnexttick'

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
    {path: '*', redirect: 'index'}
  ]
})
