<template>
  <div class="card text-white mb-3" :class="[color]">
    <div class="card-header">
      <slot name="title"></slot>
    </div>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <slot>匿名</slot>
      <!-- 相当于下面的： -->
      <!-- <slot name="default">匿名</slot> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    color () {
      return 'bg-' + this.type
    }
  },
  props: {
    type: { // 此处的type为父级引用时指定的card类型
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style scoped>
@import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
