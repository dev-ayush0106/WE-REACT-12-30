import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=>{navigate("/about")}}>Move to About</button>
    </div>
  )
}

export default Home
