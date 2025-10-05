import React from 'react'
import Child1 from './Child1'

const PropsStudy = () => {
    let name="Utkarsh"
    let city="Gurgaon"
    let profession="Software Developer"

    let skills=["C","C++","Java"]

    let objs=[
      {
        name:"Sumit",
        age:23,
        profession:"DATA SCEINTIST"
      },
      {
        name:"Vinod",
        age:30,
        profession:"PROJECT LEADER"
      },
      {
        name:"Vikas",
        age:21,
        profession:"DATA ANALYST"
      }
    ]
  return (
    <div>
        {/* <Child1 name={name} city={city} profession={profession} skills={skills}/> */}

        <Child1 name={objs[0].name} age={objs[0].age} profession={objs[0].profession}/>
        <Child1 name={objs[1].name} age={objs[1].age} profession={objs[1].profession}/>
        <Child1 name={objs[2].name} age={objs[2].age} profession={objs[2].profession}/>
    </div>
  )
}

export default PropsStudy
