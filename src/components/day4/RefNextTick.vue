<template>
  <div>
    <p ref="myp">{{msg}}</p>
    <div v-for="a in arr" ref="mydiv" :key="a">{{a}}</div>
    <div ref="wrap">
      <div v-for="a in arr" ref="mydiv" :key="a">{{a}}</div>
    </div>
  </div>
</template>

<script>
// this.$data  vm上的数据
// this.$watch()  监控
// this.$el  当前el元素
// this.$set()  后加的属性实现响应式变化
// this.$options  vm上的所有属性
// this.$nextTick(()=>{ // 异步方法，等待渲染dom完成后来获取vm})
// this.$refs  引用
export default {
  name: 'ref-nexttick',
  mounted () {
    // 如果dom元素不是通过v-for循环出来的，只能获取到一个；通过v-for循环出来的可以获取多个
    console.log(this.$refs.myp) // 1) <p>hello</p>
    console.log(this.$refs.mydiv) // 2) [div, div, div] 对象数组
    this.arr = [1, 2, 3, 4] // 4) dom 渲染是异步的
    // console.log(this.$refs.wrap) // 3) <div><div>1</div><div>2</div><div>3</div><div>4</div></div>
    // debugger // 4) 此处的调试可看出dom渲染未完成时实际上是3个div，完成后才变4个div
    // 4) dom还没有更新
    this.$nextTick(() => { // 4) 如果数据变化后想获取真实dom中的内容，需要等待页面渲染完成后再去获取，所有的dom操作最好在nextTick中
      // 4) dom现在更新了
      console.log(this.$refs.wrap)
    })
  },
  data () {
    return {
      msg: 'hello',
      arr: [1, 2, 3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
