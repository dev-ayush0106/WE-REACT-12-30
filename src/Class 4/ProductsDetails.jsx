import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const [productDetail,setProductDetails]=useState({});
    let {id}=useParams()
    let url=`https://dummyjson.com/product/${id}`

    async function productData(){
        let data=await axios.get(url)
        setProductDetails(data.data)
    }

    useEffect(()=>{
        productData()
    },[])

    console.log(productDetail)

    let navigate=useNavigate()

  return (
    <div>
        <button onClick={()=>{navigate("/")}} style={{position:"absolute",left:"20px",top:"20px"}}>&lt;Back</button>
      <h1>{productDetail.title}</h1>
      <img src={productDetail.thumbnail} alt="" />
      <p>{productDetail.description}</p>
      <p>Rs {`${Math.ceil(productDetail.price * 83)}/-`}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductsDetails
