<template>
  <div>
    <h3>路由参数、命名路由与watch监控ajax</h3>
    <!-- <router-link to="/article/1/a">文章1</router-link> -->
    <!-- 可采用 :to 的对象写法： -->
    <!-- 如果用对象作为to的属性，并且使用了参数，就必须给路由起个名字，通过名字跳转 -->
    <!-- 下面是错误写法： -->
    <!-- <router-link :to="{path:'/article', params:{c:1,a:'a'}}">文章1</router-link> -->
    <router-link :to="{name: 'art', params:{c:1,a:'a'}}">文章1</router-link>
    <router-link to="/article/2/b">文章2</router-link>
    <router-link to="/article/3/c">文章3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Router from 'vue-router'
// #/article/2
let article = {
  template: '<div>第 {{$route.params.c}} 篇文章</div>',
  watch: { // 路径参数发生变化，监控参数的变化来发送ajax
    $route () {
      alert('来个ajax')
    }
  }
}
// #/article/1/a
// /article/:c/:a => {c:1,a:'a'} = this.$route.params
let routes = [ // 路径参数，表示值必须要有但是值是随机的
  {path: '/article/:c/:a', component: article, name: 'art'}
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
