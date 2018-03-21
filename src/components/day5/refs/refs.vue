<template>
  <div>
    父组件调用子组件的方法：<br />
    <button @click="dis">调用子组件的方法</button>
    <loading ref="load"></loading>
  </div>
</template>

<script>
// 父组件调用子组件的方法
let loading = {
  data () {
    return {
      flag: true
    }
  },
  template: `<div v-show="flag">疯狂加载中。。。。。。</div>`,
  methods: {
    hide () {
      this.flag = false
    }
  }
}
export default {
  components: {
    loading
  },
  mounted () {
    // ref如果放在组件上，获取的是组件的实例，并不是组件的dom元素
    console.log(this.$refs.load)
    // this.$refs.load.hide()
    this.$refs.load.$el.style.color = 'red'
  },
  methods: {
    dis () {
      this.$refs.load.hide()
    }
  }
}
</script>

<style scoped>
</style>
