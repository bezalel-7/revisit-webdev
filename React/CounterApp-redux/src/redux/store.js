import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/CounterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
//store to centralize the data
// store is global state that contains all the states values
// store contains all the reducers
