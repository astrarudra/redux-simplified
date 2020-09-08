import { configureStore } from "@reduxjs/toolkit"
import todoSlice from './todo'
import counterSlice from './counter'
import realReducerSlice from './real'

const reducer = {
    todo: todoSlice.reducer,
    counter: counterSlice.reducer,
    real: realReducerSlice.reducer
  }

// Export Store
const Store = configureStore({reducer}) 
export default Store
// Export Store creator
// export default () => configureStore({reducer})