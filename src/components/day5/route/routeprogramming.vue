<template>
  <div>
    <h3>编程式导航</h3> <br />
    （一）声明式：<br />
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-view></router-view>
    <br />
    （二）编程式：<br />
    <!--         to="/home2" -->
    <router-link :to="{path:'/home2'}" tag="button">首页</router-link><!-- 动态的to -->
    <router-link to="/list2" tag="button">列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Router from 'vue-router'
let home = {template: '<div>首页</div>'}
let list = {template: '<div>列表页</div>'}
let home2 = {
  template: '<div>首页 <button @click="toList">去列表</button> </div>',
  methods: {
    toList () {
      this.$router.push('/list2') // 强制跳转路径
      // this.$router.replace('/list2') // 路由替换，将当前的历史记录替换掉，较少用
    }
  }
}
let list2 = {
  template: '<div>列表页 <button @click="back">返回</button> </div>',
  methods: {
    back () {
      this.$router.go(-1) // 返回某一级
      // this.$router.back() // 与上面的操作相同
    }
  }
}
let routes = [ // 路由映射表，配置路由和组件的关系
  {path: '', component: home}, // 默认展示的路由
  {path: '/home', component: home}, // 配置的关系就是页面级组件
  {path: '/list', component: list},
  {path: '/home2', component: home2},
  {path: '/list2', component: list2},
  {path: '*', redirect: '/home'} // 路径变了，组件也要切换，404的时候
]
let router = new Router({
  // mode: 'history', // 默认为hash模式
  routes,
  linkActiveClass: 'active' // 更改默认样式.router-link-active为.active
})
export default {
  router // 每个组件都会拥有一个名字叫$router的属性（有r的放的都是方法），还有一个名字叫$route（没r的存的都是属性）
}
</script>

<style scoped>
/* 路由链接激活时的颜色 */
.router-link-active {
  color: red;
}
.active {
  color: rgb(255, 0, 106);
}
</style>
