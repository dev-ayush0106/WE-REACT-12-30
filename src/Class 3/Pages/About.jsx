import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate=useNavigate()
  return (
    <div>
        <h1>About Page</h1>
        <button onClick={()=>{navigate("/services")}}>Move to Services</button>
    </div>
  )
}

export default About
