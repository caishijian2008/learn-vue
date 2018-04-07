// 宏：
// 把mutations的方法名抽离出来，便于调用，且会有方法的提示
import * as Types from './mutations-types'
const mutations = {
  // state是自动放入的，默认指的就是当前的state
  // num就是载荷（payload）
  [Types.INCREMENT] (state, num) {
    if (isNaN(parseInt(num))) return
    state.count += num
  },
  [Types.DECREMENT] (state) {
    state.count -= 1
  }
}

export default mutations
