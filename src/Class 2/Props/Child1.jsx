import React from 'react'

const Child1 = ({name,city,profession,skills,age}) => {
    // console.log(props.name)
    console.log(skills)
  return (
    <div>
        <h1>My name is {name}</h1>
        {/* <h2>City:{city}</h2> */}
        <h2>My age is {age}</h2>
        <h2>Profession:{profession}</h2>
        {/* <h2>Skills : {skills}</h2> */}
    </div>
  )
}

export default Child1
