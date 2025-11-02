import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Pagination = () => {
    let [products,setProducts]=useState([])
    let [currentPage,setCurrentPage]=useState(0)

    // Pagination
    let PAGE_SIZE=10;
    let noOfPages=Math.ceil(194/PAGE_SIZE)
    console.log(noOfPages)

    let start=currentPage*PAGE_SIZE
    let end= start+PAGE_SIZE

    function handlePage(id){
        setCurrentPage(id)
    }

    let url=`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${PAGE_SIZE*currentPage}`

    async function dataFetch(){
        let data=await axios.get(url)
        setProducts(data.data.products)
    }

    useEffect(()=>{
        dataFetch()
    },[currentPage])

    console.log(products)

    function moveFwd(){
        setCurrentPage(currentPage+1)
    }

    function moveBwd(){
        setCurrentPage(currentPage-1)
    }

    let value=useSelector((state)=>state.cart)
    console.log(value.length)

    let totalEl=value.reduce((acc,el)=>{
        return acc+el.quantity
    },0)
  return (
    <div>
        <h1>Products Data</h1>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0px 30px"}}>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="cart" style={{marginTop:"30px"}}>
                <h2><Link to="/cart">Cart {totalEl}</Link></h2>
            </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
            {
                products.map((el)=>(
                    <ProductList id={el.id} title={el.title} image={el.thumbnail} price={el.price}/>
                ))
            }
        </div>
        <button disabled={currentPage==0} style={{border:"2px solid black"}}  onClick={moveBwd}>
        <FaArrowLeft/>
        </button>
        {
            [...Array(noOfPages).keys().map((el)=>(
                <button onClick={()=>{handlePage(el)}} style={{border:"2px solid black",margin:"15px 2px"}}>{el+1}</button>
            ))]
        }
        <button disabled={currentPage===noOfPages-1} style={{border:"2px solid black"}} onClick={moveFwd}>

        <FaArrowRight/>
        </button>
    </div>
  )
}

export default Pagination
