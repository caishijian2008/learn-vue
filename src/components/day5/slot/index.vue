<template>
  <div>
    <!-- （1）一般情况下，在组件中使用类似于<modal><h1>是否删除？</h1></modal>的形式是无法直接显示<h1>中的内容的，但可以在modal组件中通过使用slot插槽标签就能把它显示出来 -->
    <!-- <modal><h1>是否删除？</h1></modal> -->
    <!-- ----------------------------------------------- -->
    <!-- （2）可为标签指定slot的名字，没有指定slot名字的标签默认会放置到default中 -->
    <modal><!-- 这里放的内容均属于父级当前模板的，只有属性名是属于组件的 -->
      <a href="http://www.baidu.com">去百度 1</a>
      <p slot="content" @click="fn">确认要删除了吗？</p><!-- 这里的fn是属于父级的，不属于<modal>的-->
      <h1 slot="title">是否删除？</h1>
      <a href="http://www.baidu.com">去百度 2</a>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/day5/slot/modal'
export default {
  methods: {
    fn () {
      alert('11')
    }
  },
  components: {
    modal
  }
}
</script>

<style scoped>
</style>
