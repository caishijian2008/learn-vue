<template>
  <div class="container">
    <div class="row">
      <table class="table table-hover table-bordered">
        <caption class="h3 text-warning text-center">购物车</caption>
        <thead>
          <tr>
            <!-- click事件点击时checkbox的状态还没有改变，所以拿到的总是相反的，change事件可以保证只当值变化后再触发函数 -->
            <th>全选<input type="checkbox" v-model="checkAll" @change="change"></th>
            <td>商品</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td><input type="checkbox" v-model="product.isSelected" @change="checkOne"></td>
            <td><img :src="product.productCover" :title="product.productInfo">{{product.productName}}</td>
            <td>{{product.productPrice}}</td>
            <td><input type="number" v-model.number="product.productCount" min="1"></td>
            <td>{{product.productPrice * product.productCount | toFixed(2)}}</td>
            <td>
              <button class="btn btn-danger" @click="remove(product)">删除</button>
            </td>
          </tr>
          <tr>
            <!-- {{sum()}}数据一变化就会重新调用此函数算出最新的结果，不会缓存上一次的结果，computed可以解决这个问题 -->
            <td colspan="6">总价格：{{ sum() | toFixed(2)}}</td>
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
      // input代表的是管道符前的值，param代表的是toFixed中传递的值（可有多个）
      return '￥' + input.toFixed(param1)
    }
  },
  methods: {
    sum () { // 总价格求和函数
      return this.products.reduce((prev, next) => {
        // alert(1) // sum放在methods中，一改变数量就立即计算，没有缓存，性能下降
        if (!next.isSelected) return prev // 如果当前没被选中，就不加当前这一项
        return prev + next.productPrice * next.productCount
      }, 0)
    },
    checkOne () { // 根据下面点击的结果控制上面全选的结果
      this.checkAll = this.products.every(item => item.isSelected)
    },
    change () {
      // 根据当前自己的状态设置其他人的状态，实现全选和反选
      this.products.forEach(item => item.isSelected = this.checkAll)
    },
    remove (p) { // p代表的是当前点击的这一项
      this.products = this.products.filter(item => item !== p)
    },
    getData () {
      axios.get('../../../static/cart.json').then(res => {
        this.products = res.data
        this.checkOne() // 数据获取完成后给checkAll赋予默认值
      }, err => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      products: [],
      checkAll: false // 是否全选
    }
  }
}
</script>

<style scoped>
@import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
</style>
