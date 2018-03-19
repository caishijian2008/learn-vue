<template>
  <div>
    输入任意字符：<br />
    <input type="text" v-model="a">
    {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '',
      msg: ''
    }
  },
  // watch用于异步，只有值变化时才会触发。
  // 常见场景如：注册时通过后端判断用户名是否已存在，添加中间状态。
  // 还可使用vm.$watch(expOrFn, callback, [options])
  watch: {
    a (newVal, oldVal) { // watch的属性名要和观察的对象的名字一致
      // console.log(newVal, oldVal)
      this.msg = '等一下。。。。。。' // 模拟设置中间状态
      setTimeout(() => {
        if (newVal.length < 3) {
          return (this.msg = '太少了') // 这里的return用于结束当前语句
        }
        if (newVal.length > 6) {
          return (this.msg = '太多了')
        }
        this.msg = ''
      }, 2000)
    }
  }/* ,
  computed: { // computed默认调用get方法，必须要有return，不支持异步
    msg () {
      if (this.a.length < 3) { return '少了' }
      if (this.a.length > 6) { return '多了' }
      return ''
    }
  } */
}
// 使用vm.$watch()
/* vm.$watch('vm.a', function (newVal, oldVal) {
      vm.msg = '等一下。。。。。。'
      setTimeout(() => {
        if (newVal.length < 3) {
          return (vm.msg = '太少了')
        }
        if (newVal.length > 6) {
          return (vm.msg = '太多了')
        }
        vm.msg = ''
      }, 2000)
}) */
</script>

<style scoped>

</style>
