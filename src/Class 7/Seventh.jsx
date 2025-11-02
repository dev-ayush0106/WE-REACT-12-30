import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlicer'

const Seventh = () => {
    const value=useSelector((state)=>state.counter.value)
    console.log(value)

    const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      {value}
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}

export default Seventh
