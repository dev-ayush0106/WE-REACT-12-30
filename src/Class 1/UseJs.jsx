import React from 'react'

const UseJs = () => {
    let name = "Ayush Kumar";
    let info = {
        name: "Shubham",
        age: 23,
        city: "Pune"
    }

    let names = ["Dharika", "Sumit", "Praveen", "utkarsh", "Aayush"];
    return (
        <div>
            <h2>My name is {name}</h2>
            <h2>My name is {info.name} , my age is {info.age} and my city is {info.city}</h2>
            <ul>
                {
                    names.map((el)=>(
                        <li>{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseJs
