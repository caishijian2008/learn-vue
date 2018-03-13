<template>
  <div>
    父亲：{{ money }}
    <!-- 相当于child.$on('child-msg', things) -->
    <child :m="money" @child-msg="things"></child>
  </div>
</template>

<script>
// 单向数据流，父级数据刷新，子级就刷新
import child from '@/components/day4/sonTofather/child'
export default {
  methods: {
    things (val) {
      this.money = val
    }
  },
  components: {
    child
  },
  data () {
    return {
      money: 400
    }
  }
}
</script>

<style scoped>

</style>
