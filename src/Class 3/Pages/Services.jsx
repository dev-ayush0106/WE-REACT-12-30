import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
    let navigate=useNavigate()
  return (
    <div>
        <h1>Services Page</h1>
        <button onClick={()=>{navigate("mern")}}>Go to MERN Stack</button>
        <button onClick={()=>{navigate("java")}}>Go to JAVA Stack</button>
        <button onClick={()=>{navigate("python")}}>Go to PYTHON Stack</button>
        <button onClick={()=>{navigate("dotnet")}}>Go to DOT NET Stack</button>

        <Outlet/>
    </div>
  )
}

export default Services
