import React from 'react'
import { useSelector } from 'react-redux'

const CartFooter = () => {
    let cartProducts = useSelector((state) => state.cart)

    let total=cartProducts.reduce((acc,el)=>{
        return acc+(el.quantity*Math.ceil(el.price*83))
    },0)

    console.log(total)
    return (
        <div>
            <h1>Total Summary</h1>
            <hr />
            <div className="summary" style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ width: "200px" }}>Title</h3>
                <h3 style={{ width: "200px" }}>Quantity</h3>
                <h3 style={{ width: "200px" }}>Total Price</h3>
            </div>
            <div>
                {
                    cartProducts.map((el) => (
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "200px" }}>{el.title}</div>
                            <div style={{ width: "200px" }}>{el.quantity}</div>
                            <div style={{ width: "200px" }}>{el.quantity * Math.ceil(el.price * 83)}</div>
                        </div>
                    ))
                }
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h2>Total</h2>
                <h2>Rs {total}\-</h2>
            </div>
        </div>
    )
}

export default CartFooter
