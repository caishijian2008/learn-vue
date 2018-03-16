<template>
  <div class="container">
    <div class="row">
      <table class="table table-hover table-bordered">
        <caption class="h3 text-warning text-center">购物车</caption>
        <thead>
          <tr>
            <th>全选<input type="checkbox" v-model="checkAll"></th>
            <td>商品</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td><input type="checkbox" v-model="product.isSelected"></td>
            <td><img :src="product.productCover" :title="product.productInfo">{{product.productName}}</td>
            <td>{{product.productPrice}}</td>
            <td><input type="number" v-model.number="product.productCount" min="1"></td>
            <td>{{product.productPrice * product.productCount | toFixed(2)}}</td>
            <td>
              <button class="btn btn-danger" @click="remove(product)">删除</button>
            </td>
          </tr>
          <tr>
            <td colspan="6">总价格：{{ sum | toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    this.getData()
  },
  filters: {
    toFixed (input, param1) {
      return '￥' + input.toFixed(param1)
    }
  },
  // 当给全选赋值时，要影响其它项的变化；当页面刷新时，获取全选值，
  // 是根据它下面的checkbox计算出来的结果给全选赋值
  computed: {
    checkAll: {
      // 当products值变化时会重新计算
      get () {
        return this.products.every(p => p.isSelected)
      },
      set (val) { // 当给checkbox赋值的时候
        this.products.forEach(item => (item.isSelected = val))
      }
    },
    sum () { // 如果计算属性写成函数，默认调用的就是get方法
      return this.products.reduce((prev, next) => {
        if (!next.isSelected) return prev
        return prev + next.productPrice * next.productCount
      }, 0)
    }
    // sum: { // sum的结果会被缓存，如果依赖的数据没有变化就不会重新执行
    //   get () {
    //     return this.products.reduce((prev, next) => {
    //       if (!next.isSelected) return prev
    //       return prev + next.productPrice * next.productCount
    //     }, 0)
    //   }
    // }
  },
  methods: {
    // checkOne () {
    //   this.checkAll = this.products.every(item => item.isSelected)
    // },
    // change () {
    //   this.products.forEach(item => item.isSelected = this.checkAll)
    // },
    remove (p) {
      this.products = this.products.filter(item => item !== p)
    },
    getData () {
      axios.get('../../../static/cart.json').then(res => {
        this.products = res.data
        // this.checkOne()
      }, err => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      products: []
    }
  }
}
</script>

<style scoped>
@import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
</style>
