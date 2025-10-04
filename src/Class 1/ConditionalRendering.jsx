import React from 'react'

const ConditionalRendering = () => {
    let age =9;

    function handleClick(){
        alert("Clicked Button")
    }
  return (
    <div>
        {/* {
            (age>=19)?
            <h1>Eligible</h1> :
            <h1>Not Eligible</h1>
        } */}

        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ConditionalRendering
