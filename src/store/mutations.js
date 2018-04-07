// 宏：
// 把mutations的方法名抽离出来，便于调用，且会有方法的提示
// [Types.INCREMENT] (state, num) {} 中的[]是ES6的语法
import * as Types from './mutation-types'
const mutations = {
  // state是自动放入的，默认指的就是当前的state
  // num就是载荷（payload）
  // add (state, num) {
  [Types.INCREMENT] (state, num) {
    if (isNaN(parseInt(num))) return
    state.count += num
  },
  // minus (state) {
  [Types.DECREMENT] (state) {
    state.count -= 1
  }
}

export default mutations
