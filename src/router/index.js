import Vue from 'vue'
import Router from 'vue-router'
// import app from '../App'
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
import nexttick from '@/components/day5/refs/nexttick'
import slotdemo from '@/components/day5/slot/slotdemo'
import slotdemo2 from '@/components/day5/slot/slotdemo2'
import routeprogramming from '@/components/day5/route/routeprogramming'
import nestedrouter from '@/components/day5/route/nestedrouter'
import routerparams from '@/components/day5/route/routerparams'
import routetransition from '@/components/day5/route/routetransition'
import counter from '@/components/day10/vuex/counter'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {path: '', component: app},
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app
    // },
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
    {path: '/nexttick', component: nexttick},
    {path: '/slotdemo', component: slotdemo},
    {path: '/slotdemo2', component: slotdemo2},
    {path: '/routeprogramming', component: routeprogramming},
    {path: '/nestedrouter', component: nestedrouter},
    {path: '/routerparams', component: routerparams},
    {path: '/routetransition', component: routetransition},
    {path: '/counter', component: counter}
    // {
    //   path: '*',
    //   redirect: '/app'
    // }
  ]
})
