import React, { useEffect } from 'react'
import axios from 'axios'

const UseEffect = () => {
    // useEffect is a hook which is used to handle the side Effects of the website

    // useEffect has 3 uasge:
    //      1. Without any dependency : it will render whenever their is render on the page.

    //      2. With empty Array : (API calls) It is only render on the first call 

    //      3. With an object : It will render whenever their is an update on the object

    // useEffect(callback,dependency)

    let url="https://catfact.ninja/fact";

    // Method 1 using fetch

    // function apiCall(){
    //     fetch(url) // promise : then & catch
    //     .then((res)=>{
    //         return res.json() // promise
    //     })
    //     .then((data)=>{
    //         console.log(data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    // Method 2 Axios

    async function apiCall(){
        let res=await axios.get(url)
        console.log(res)
    }

    useEffect(()=>{
        apiCall()
    },[])
  return (
    <div>
        <h1>Use Effect</h1>
        <h2>hello</h2>
        <h1>hii</h1>
        <h2>hello</h2>
    </div>
  )
}

export default UseEffect
