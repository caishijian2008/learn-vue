<template>
  <div>
    slot结合父子传递，bootstrap4.0框架：<br />
    <card type="primary">
      <div slot="title">这是一篇vue的使用</div>
      <div slot="content">内容区
        <p>组件的使用</p>
        <p>slot的用法</p>
        <p>ref的用法</p>
        <p>nextTick的用法</p>
      </div>
      <div slot="default">作者：XXX</div><!-- 注销此行时就显示 <slot>匿名</slot> -->
    </card>
    <card type="warning"></card>
  </div>
</template>

<script>
import card from '@/components/day5/slot/card'
export default {
  components: {
    card
  }
}
</script>

<style scoped>
</style>
