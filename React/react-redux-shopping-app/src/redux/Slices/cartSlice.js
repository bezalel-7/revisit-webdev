import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
    removePost: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addPost, removePost } = CartSlice.actions

export const cartReducer = CartSlice.reducer

export default cartReducer
