# 父传子

### 父级：

```
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
```

### 子级：

```
<template>
  <div>儿子：{{ m }}</div>
</template>

<script>
export default {
  // 可对props进行校验
  // props: ['m']  // 写法一，常规写法
  // props: { // 写法二，校验写法
  //   m: {
  //     type: [String, Number, Boolean, Function, Object, Array, Symbol]
  //   }
  // }
  // props: { // 写法三，校验且必传
  //   m: {
  //     type: [String, Number],
  //     required: true
  //   }
  // }
  // props: { // 写法四，校验且有默认值
  //   m: {
  //     type: Number,
  //     default: 100
  //   }
  // }
  props: { // 写法五，自定义验证函数
    m: {
      // type: Number,
      validator (value) { return value > 10 }
    }
  }
}
</script>
```
