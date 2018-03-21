import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import refnexttick from '@/components/day4/refnexttick'
import fathertoson from '@/components/day4/fatherToson/father'
import sontofather from '@/components/day4/sonTofather/father'
import syncmod from '@/components/day4/sync/father'
import shoppingcart from '@/components/day2/shoppingcart'
import shoppingcartfin from '@/components/day2/shoppingcart_final'
import cartdemo from '@/components/day3/cartdemo'
import watch from '@/components/day3/watch'
import slot from '@/components/day5/slot/index'
import refs from '@/components/day5/refs/refs'

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
    {path: '/shoppingcart', component: shoppingcart},
    {path: '/shoppingcartfin', component: shoppingcartfin},
    {path: '/cartdemo', component: cartdemo},
    {path: '/watch', component: watch},
    {path: '/slot', component: slot},
    {path: '/refs', component: refs},
    {path: '*', redirect: 'index'}
  ]
})
