<template>
  <div>
    <ul>
      <li><router-link to="/refnexttick">$ref, $nextTick()等</router-link></li>
      <li><router-link to="/fathertoson">father To son</router-link></li>
      <li><router-link to="/sontofather">son To father</router-link></li>
      <li><router-link to="/sync">Sync Modifiers</router-link></li>
      <li><router-link to="/shoppingcart">Shopping Cart</router-link></li>
      <li><router-link to="/shoppingcartfin">Shopping Cart 最终版</router-link></li>
      <li><router-link to="/cartdemo">购物车精简版</router-link></li>
      <li><router-link to="/watch">watch 监听器</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
ul {
  list-style-type: none;
  float: left;
}

ul li {
   display: inline-block;
   margin-top: 20px;
}

a {
  padding: 5px;
  margin: 5px;
  background: crimson;
  color: #fff;
  text-decoration: none;
}
</style>
