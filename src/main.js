// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 拆分vuex
import i18n from './i18n' // 引入国际化

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // store被注册到了实例上，所有组件都会有一个属性：this.$store
  i18n,
  components: { App },
  template: '<App/>'
})
