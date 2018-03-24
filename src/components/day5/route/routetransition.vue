<template>
  <div>
    <h3>路由动画transition与keep-alive（使用animate.css动画库）</h3>
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <!-- mode="out-in" 动画的模式 -->
    <!-- <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    > -->
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <!-- 要缓存谁，就把谁用<keep-alive>包起来 -->
      <keep-alive>
        <!-- 为防止动画的抖动，可为<router-view>添加position样式 -->
        <router-view style="position: absolute; top: 20%; left: 0; width: 100%;"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Router from 'vue-router'
let home = {template: '<div style="background: red;">首页</div>'}
let list = {template: '<div style="background: green;">列表页</div>'}
let routes = [
  {path: '/home', component: home},
  {path: '/list', component: list}
]
let router = new Router({
  routes
})
export default {
  router
}
</script>

<style scoped>
@import '../../../../node_modules/animate.css/animate.css';
</style>
