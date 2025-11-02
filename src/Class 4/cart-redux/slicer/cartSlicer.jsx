import { createSlice } from "@reduxjs/toolkit";
let initialState=[]

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        },
        addToQuantity:(state,action)=>{
            let element=state.find((el)=>el.id===action.payload)
            element.quantity+=1;
            state=[...state,element]

        },
        incItemQty:(state,action)=>{
            let item=state.find((el)=>el.id===action.payload)
            if(item){
                item.quantity+=1;
            }
        },
        decItemQty:(state,action)=>{
            let item=state.find((el)=>el.id===action.payload)
            if(item){
                item.quantity-=1;
            }
        }
    }
})

export const { add, remove,addToQuantity,incItemQty,decItemQty } = cartSlice.actions
export default cartSlice.reducer