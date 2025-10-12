import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Pagination = () => {
    let [products,setProducts]=useState([])
    let [currentPage,setCurrentPage]=useState(0)

    // Pagination
    let PAGE_SIZE=10;
    let noOfPages=Math.ceil(products.length/PAGE_SIZE)
    console.log(noOfPages)

    let start=currentPage*PAGE_SIZE
    let end= start+PAGE_SIZE

    function handlePage(id){
        setCurrentPage(id)
    }

    let url="https://dummyjson.com/products?limit=500"

    async function dataFetch(){
        let data=await axios.get(url)
        setProducts(data.data.products)
    }

    useEffect(()=>{
        dataFetch()
    },[])

    console.log(products)
  return (
    <div>
        <h1>Products Data</h1>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
            {
                products.slice(start,end).map((el)=>(
                    <ProductList id={el.id} title={el.title} image={el.thumbnail} price={el.price}/>
                ))
            }
        </div>
        {
            [...Array(noOfPages).keys().map((el)=>(
                <button onClick={()=>{handlePage(el)}} style={{border:"2px solid black",margin:"15px 2px"}}>{el+1}</button>
            ))]
        }
    </div>
  )
}

export default Pagination
