<template>
  <div>
    子组件和父组件同时拥有mounted方法时，<br />
    需要等待子组件挂载完成后再触发父组件的挂载<br />
    想要操作dom，就须使用$nextTick<br />
    <child ref="child"></child>
  </div>
</template>

<script>
// 子组件和父组件同时拥有mounted方法时，
// 需要等待子组件挂载完成后再触发父组件的挂载
export default {
  mounted () {
    // alert('parent')
    console.log(this.$refs.child.$el.innerHTML) // 得到的结果不是想要的，123
    this.$nextTick(() => { // 想要操作dom，就加一个$nextTick
      console.log(this.$refs.child.$el.innerHTML) // 这才是想要的，456
    })
  },
  components: {
    child: { // 子组件
      template: `
        <div>
          <li v-for="a in arr">{{a}}</li>
        </div>
      `,
      data () {
        return {arr: [1, 2, 3]}
      },
      mounted () {
        // alert('child')
        this.arr = [4, 5, 6] // 此处是异步渲染dom
      }
    }
  }
}
</script>

<style scoped>
</style>
