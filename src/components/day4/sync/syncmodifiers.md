# sync 修饰符

### 父级：

```
<template>
  <div>
    父亲：{{ money }}
    <!--<child :m="money" @child-msg="things"></child>-->
    <!-- 由上面的变成下面的，同时things()去掉： -->
    <!--<child :m="money" @child-msg="val => this.money = val"></child>-->
    <!-- 再改个名，子级的$emit()也要相应改为update:m -->
    <!--<child :m="money" @update:m="val => this.money = val"></child>-->
    <!-- 最后改成有sync修饰符的（语法糖）： -->
    <child :m.sync="money"></child>
  </div>
</template>

<script>
import child from '@/components/day4/sync/child'
export default {
  // methods: {
  //   things (val) {
  //     this.money = val
  //   }
  // },
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
```

### 子级：

```
<template>
  <div>儿子：{{ m }}  <button @click="getMoney">多要钱</button></div>
</template>

<script>
export default {
  props: ['m'],
  methods: {
    getMoney () {
      // 触发自己的自定义事件，让父级的方法执行
      // this.$emit('child-msg', 800)
      this.$emit('update:m', 800)
    }
  }
}
</script>
```
