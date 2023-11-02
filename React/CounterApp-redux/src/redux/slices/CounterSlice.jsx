import { createSlice } from '@reduxjs/toolkit'

// redux in react contains 3 parts (action, reducer, store)
// action: is a function that return an object
// reducer: is a function that return a new state
// store: is a global state

// name enka intial state enka reducer

const initialState = {
  value: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export const counterReducer = counterSlice.reducer // Create the reducer

export default counterReducer
// counterSlice.reducer what does it does ? it returns a new state |
// then what does counterSlice.actions does ? it returns an object that contains the actions
// then what does increment and decrement does ? they are functions that returns an object
