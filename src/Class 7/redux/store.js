import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlicer'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer
  },
})