import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice'
export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <br></br>
      <br></br>
      <div>{count}</div>
      <br></br>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}
