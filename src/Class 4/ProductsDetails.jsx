import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { add, addToQuantity } from './cart-redux/slicer/cartSlicer';

const ProductsDetails = () => {
    let [data,setData]=useState({});

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

    let cartProducts=useSelector((state)=>state.cart)
    let dispatch=useDispatch()
    
    function addToCart(data){
      if(cartProducts.find((el)=>el.id===data.id)){
        dispatch(addToQuantity(data.id))
      }
      else{
        dispatch(add({...data,"quantity":1}))
      }

      navigate("/")
    }

  return (
    <div>
        <button onClick={()=>{navigate("/")}} style={{position:"absolute",left:"20px",top:"20px"}}>&lt;Back</button>
      <h1>{productDetail.title}</h1>
      <img src={productDetail.thumbnail} alt="" />
      <p>{productDetail.description}</p>
      <p>Rs {`${Math.ceil(productDetail.price * 83)}/-`}</p>
      <button onClick={()=>{addToCart(productDetail)}}>Add to Cart</button>
    </div>
  )
}

export default ProductsDetails
