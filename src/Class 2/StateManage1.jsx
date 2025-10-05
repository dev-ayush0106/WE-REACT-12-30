import React, { useState } from 'react'
import { FaHeart, FaMoon, FaSun } from "react-icons/fa6";
import "./modify.css"
const StateManage1 = () => {
    // const [status, setStatus] = useState(true)
    // function handleHideNShow() {
    //     setStatus(!status);
    // }
    // console.log(status);

    // const [current,setCurrent]=useState(false)

    // function handleStyle(){
    //     setCurrent(!current)
    // }

    const [theme,setTheme]=useState(false)
    // false : light mode : moon
    // true : dark mode : sun

    function handleTheme(){
        setTheme(!theme)
    }
    return (
        <div>
            {/* {
                status && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet laudantium expedita odit voluptatem ut nesciunt nisi placeat commodi aperiam! Accusamus nesciunt iusto repellendus vel, cupiditate modi animi qui ipsam similique tenetur amet ex quasi explicabo, fugiat hic illo inventore. Totam commodi impedit sapiente, saepe maiores animi a laborum reiciendis.</p>
            }

            <button onClick={handleHideNShow}>
                {
                    (status) ?
                    "Hide Para" :
                    "Show Para"
                }
            </button> */}

            {/* <FaHeart onClick={handleStyle} className='change' style={(current)?{"color":"red"}:{}} /> */}
            <div style={{border:"2px solid black",padding:"30px",width:"300px"}} 
            className={(theme)?"allContent":""}
            >
            {
                (theme)?
            <FaSun onClick={handleTheme} style={{fontSize:"6rem" ,color:"yellow"}}/>:
            <FaMoon onClick={handleTheme} style={{fontSize:"6rem", color:""}}/>
            }
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam error tempore eius illo perspiciatis, praesentium cum, aspernatur ad quasi commodi cumque nemo, voluptatibus nesciunt ducimus maiores a autem beatae excepturi.
                </p>

                <h3>
                    Current Theme : {(theme)?"Dark":"Light"}
                </h3>
            
            </div>
        </div>
    )
}

export default StateManage1
