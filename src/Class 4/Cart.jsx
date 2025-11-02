import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decItemQty, incItemQty, remove } from './cart-redux/slicer/cartSlicer'
import CartFooter from './cart-redux/CartFooter'

const Cart = () => {
  let value=useSelector((state)=>state.cart)
  console.log(value)
  let dispatch=useDispatch()
  function removeItem(id){
    dispatch(remove(id))
  }

  function incCount(data){
    dispatch(incItemQty(data))
  }
  function decCount(data){
    dispatch(decItemQty(data))
  }
  return (
    <div>
      <h1>Cart</h1>
      <div>
      {value.map((el)=>(
        <div style={{border:"2px solid black"}}>
        <h4>{el.title}</h4>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <img src={el.thumbnail} alt="" />
          <p>{`Rs ${Math.ceil(el.price * 83)}`}</p>
        </div>
        <div>
          <button onClick={()=>{incCount(el.id)}}>+</button>
          Quantity : {el.quantity}
          <button onClick={()=>{decCount(el.id)}} disabled={el.quantity==1}>-</button>
        </div>
        <button onClick={()=>{removeItem(el.id)}}>Remove Item</button>
        </div>

      ))}
      </div>
      <CartFooter/>
    </div>
  )
}

export default Cart
