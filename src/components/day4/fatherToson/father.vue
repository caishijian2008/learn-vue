<template>
  <div>
    父亲：{{ money }}
    <child :m="money"></child>
  </div>
</template>

<script>
import child from '@/components/day4/fatherToson/child'
export default {
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
