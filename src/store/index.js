import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger' // vuex的日志插件
import mutations from './mutations'

// vuex用于：平级组件交互，找共同的父级解决，跨组件交互，解决EventBus的混乱（基于发布订阅模式）
// vuex是为了大型项目开发，主要是状态管理，将数据统一管理
// 状态就是数据，相当于组件中的data()函数（不完全理解）
Vue.use(Vuex)
const state = { count: 0 }

export default new Vuex.Store({ // 容器是唯一的
  strict: true, // 只能通过mutation来更改状态，mutation相当于管理员的角色，mutation不支持异步
  plugins: [logger()], // logger是vuex的日志插件
  state,
  mutations
})
