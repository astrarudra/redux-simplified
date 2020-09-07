import { configureStore } from "@reduxjs/toolkit"
import exampleSlice from './example'

const reducer = {
    example: exampleSlice.reducer
  }

// Automatically Handles DevTools of Redux
const Store = configureStore({reducer}) 
export default Store