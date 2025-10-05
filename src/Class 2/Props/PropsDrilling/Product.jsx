import React from 'react'
import ProductDetails from './ProductDetails'

const Product = () => {
    const productsData=[
        {
            name:"Google Pixel 9",
            id:12323,
            price:39999
        },
        {
            name:"Iphone 15",
            id:19823,
            price:45999
        },
        {
            name:"Nothing 2",
            id:48338,
            price:19999
        },
        {
            name:"Google Pixel 10 Pro XL",
            id:49323,
            price:129999
        },
        {
            name:"Iphone 17 Pro Max",
            id:42930,
            price:139999
        },
        {
            name:"Samsung Fold F5",
            id:13873,
            price:159999
        },
    
    ]
  return (
    <div>
      {
        productsData.map((el)=>(
            <ProductDetails name={el.name} id={el.id} price={el.price}/>
        ))
    }
    </div>
  )
}

export default Product
