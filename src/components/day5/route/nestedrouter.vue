<template>
  <div>
    <h3>路由的嵌套</h3>
    <router-link to="/home">首页</router-link>
    <router-link to="/detail">详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Router from 'vue-router'
let home = {template: '<div>home</div>'}
let detail = {
  template: `
    <div>
      <router-link to="/detail/profile">个人中心</router-link>
      <router-link to="/detail/about">关于我</router-link>
      <router-view></router-view>
    </div>
  `
}
let profile = {template: '<div>profile</div>'}
let about = {template: '<div>about</div>'}
let routes = [
  {path: '/home', component: home},
  {
    path: '/detail',
    component: detail,
    children: [ // children中的路径永远不带/，如果带/表示是一级路由
      {path: 'profile', component: profile},
      {path: 'about', component: about}
    ]
  }
]
let router = new Router({
  routes
})
export default {
  router
}
</script>

<style scoped>
</style>
