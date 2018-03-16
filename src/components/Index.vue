<template>
  <div>
    <!--<refnexttick></refnexttick>-->
    <router-link to="/refnexttick">$ref, $nextTick()等</router-link>
    <router-link to="/fathertoson">father To son</router-link>
    <router-link to="/sontofather">son To father</router-link>
    <router-link to="/sync">Sync Modifiers</router-link>
    <router-link to="/shoppingcart">Shopping Cart</router-link>
    <router-link to="/shoppingcartfin">Shopping Cart 最终版</router-link>
    <router-view/>
  </div>
</template>

<script>
// import refnexttick from '@/components/day4/refnexttick'
export default {
  // components: {
  //   refnexttick
  // }
}
</script>

<style scoped>
a {
  padding: 5px;
  margin: 5px;
  background: crimson;
  color: #fff;
  text-decoration: none;
}
</style>
