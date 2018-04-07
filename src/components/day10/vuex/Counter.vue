<template>
  <div>
    <p>vuex用于：平级组件交互，找共同的父级解决，跨组件交互，解决EventBus的混乱（基于发布订阅模式）</p>
    <p>vuex是为了大型项目开发，主要是<b>状态</b>管理，将数据统一管理</p>
    <p>状态就是数据，相当于组件中的data()函数（不完全理解）</p>
    计数器：<button @click="minus">-</button><br />
    当前：{{this.$store.state.count}}<br />
    计数器：<button @click="add">+</button>
  </div>
</template>

<script>
import * as Types from '../../../store/mutation-types'
export default {
  methods: {
    add () {
      // 提交add的mutation
      // 载荷：payload
      // this.$store.commit('add', 2)
      this.$store.commit(Types.INCREMENT, 2)
    },
    minus () {
      // this.$store.commit('minus')
      this.$store.commit(Types.DECREMENT)
    }
  }
}
</script>

<style scoped>

</style>
