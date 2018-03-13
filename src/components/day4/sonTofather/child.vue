<template>
  <div>儿子：{{ m }}  <button @click="getMoney">多要钱</button></div>
</template>

<script>
export default {
  props: ['m'],
  methods: {
    getMoney () {
      // 触发自己的自定义事件，让父级的方法执行
      this.$emit('child-msg', 800)
    }
  }
}
</script>

<style scoped>

</style>
