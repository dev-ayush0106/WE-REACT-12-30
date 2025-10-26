import React, { useState } from 'react'

const Form1 = () => {
    let [formData,setFormData]=useState({
        name:"",
        age:"",
        email:""
    })

    function handleInputChange(e){
        const {name,value}=e.target
        setFormData((prev)=>(
            {...prev,[name]:value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        setFormData({
            name:"",
            age:"",
            email:""
        })
    }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Full Name:</label>
        <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your Name'/>
        <br />
        <label htmlFor="">Age:</label>
        <input type="number" name='age' value={formData.age} onChange={handleInputChange} placeholder='Enter your Age'/>
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" name='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your Email'/>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form1
