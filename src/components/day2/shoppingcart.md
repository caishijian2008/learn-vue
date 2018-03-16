# shopping cart 购物车的一些相关问题

## （1）Arrow function should not return assignment
```js
this.products.forEach(item => item.isSelected = this.checkAll)
```
此处的箭头函数在eslint下会提示有错误：
 http://eslint.org/docs/rules/no-return-assign  Arrow function should not return assignment
所以要把箭头函数后的语句再用括号括起来就没事了，即：
```js
this.products.forEach(item => (item.isSelected = this.checkAll))
```

## （2）computed计算属性

```js
checkAll: {
  // 当products值变化时会重新计算
  get () {
    return this.products.every(p => p.isSelected)
  },
  set (val) { // 当给checkbox赋值的时候
    this.products.forEach(item => (item.isSelected = val))
  }
}
```
计算属性自带getter和setter，就像Object.defindProperties()一样，如果计算属性写成函数，默认调用的就是get方法。