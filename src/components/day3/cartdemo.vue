<template>
  <div>
    全选 <input type="checkbox" v-model="checkAll"> <br />
    <input type="checkbox" v-for="(product, index) in products" v-model="product.isSelected" :key="index"> <br />
  </div>
</template>

<script>
export default {
  computed: {
    checkAll: {
      get () { // 返回什么结果，就会赋予给checkAll属性
        return this.products.every(item => item.isSelected)
      },
      set (val) { // val是给checkAll赋予值的时候传递过来的
        this.products.forEach(item => (item.isSelected = val))
      }
    }
  },
  data () {
    return {
      products: [{isSelected: true}, {isSelected: true}]
    }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  margin: 10px;
}
</style>
