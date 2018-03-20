<template>
  <div>
    <!-- （1）定制模板 -->
    <!-- <slot></slot> -->
    <!-- slot中可以放置一些默认的内容，当引用的父级组件在标签内不添加任何值时就显示这里的，如果加了就把此内容替换掉 -->
    <!-- <slot>这是一个默认标题</slot> -->
    <!-- 这里的slot与上面的等价 -->
    <!-- <slot name="default">这是一个默认标题</slot> -->
    <!-- ------------------------------------------------- -->
    <!-- （2）指定slot的名字 -->
    <slot name="title">默认标题</slot>
    <slot name="content">默认内容</slot>
    <slot name="default">这是一个默认标题</slot>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
</style>
