<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <ul>
      <li><router-link to="/refnexttick">$ref, $nextTick()等</router-link></li>
      <li><router-link to="/fathertoson">father To son</router-link></li>
      <li><router-link to="/sontofather">son To father</router-link></li>
      <li><router-link to="/sync">Sync Modifiers</router-link></li>
      <li><router-link to="/shoppingcart">Shopping Cart</router-link></li>
      <li><router-link to="/shoppingcartfin">Shopping Cart 最终版</router-link></li>
      <li><router-link to="/cartdemo">购物车精简版</router-link></li>
      <li><router-link to="/watch">watch 监听器</router-link></li>
      <li><router-link to="/slot">slot用法1</router-link></li>
      <li><router-link to="/refs">父组件调用子组件的方法</router-link></li>
      <li><router-link to="/nexttick">强调NextTick</router-link></li>
      <li><router-link to="/slotdemo">slot用法2</router-link></li>
      <li><router-link to="/slotdemo2">slot与组件的循环</router-link></li>
    </ul> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* ul {
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
} */
</style>
