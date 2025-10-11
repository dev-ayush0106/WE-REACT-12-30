import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  let {id}=useParams()
  console.log(id)
  return (
    <div>
        <h1>Contact Page</h1>
        <h2>No : {id}</h2>
    </div>
  )
}

export default Contact
