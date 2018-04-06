// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// vuex用于：平级组件交互，找共同的父级解决，跨组件交互，解决EventBus的混乱（基于发布订阅模式）
// vuex是为了大型项目开发，主要是状态管理，将数据统一管理
// 状态就是数据，相当于组件中的data()函数（不完全理解）
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
