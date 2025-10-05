import React from 'react'
import ProductName from './ProductName'
import ProductId from './ProductId'
import ProductPrice from './ProductPrice'

const ProductDetails = ({name,id,price}) => {
  return (
    <div style={{border:"2px solid black",padding:"30px",width:"300px",borderRadius:"20px"}}>
        <ProductId id={id}/>
        <ProductName name={name}/>
        <ProductPrice price={price}/>
    </div>
  )
}

export default ProductDetails
