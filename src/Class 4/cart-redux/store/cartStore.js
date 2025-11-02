import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slicer/cartSlicer";

export const cartStore=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})