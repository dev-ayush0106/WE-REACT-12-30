import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{fontSize:"1.3rem",display:"flex",gap:"30px",width:"100%",justifyContent:"space-between"}}>
      {/* <span><a href="/">Home</a></span>
      <span><a href="/about">About</a></span>
      <span><a href="/services">Services</a></span>
      <span><a href="/contact">Contact</a></span> */}

      <span><Link to="/">Home</Link></span>
      <span><Link to="/about">About</Link></span>
      <span><Link to="/services">Services</Link></span>
      <span><Link to="/contact">Contact</Link></span>

      {/* What is Virtual Dom?
            --> It makes the copy of Dom nd update only the essential pasrt whic is updated, it helps us to optimise our react application and make them fast
            using diff algorthim
      */}
    </div>
  )
}

export default Navbar
