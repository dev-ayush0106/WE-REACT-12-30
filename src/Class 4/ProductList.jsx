import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = ({ id, title, image, price }) => {
    let navigate = useNavigate()
    function handleNavigate() {
        navigate(`/product/${id}`)
    }
    return (
        <div onClick={handleNavigate} style={{ border: "2px solid black", width: "300px" }}>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>Rs {`${Math.ceil(price * 83)}/-`}</p>
        </div>
    )
}

export default ProductList
