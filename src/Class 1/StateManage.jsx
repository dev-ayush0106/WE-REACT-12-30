import React, { useState } from 'react'

const StateManage = () => {
    const[count,setCount]=useState(5)
    console.log(count)

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={increase}>+</button>
        <span>{count}</span>
        <button 
        disabled={count==0}
        onClick={decrease}>
            {
                (count==0)?
                "Not able to click":
                "-"
            }
        </button>

        {/* {
            count==0 && <p>Not able to Click Now</p>
        } */}
    </div>
  )
}

export default StateManage
