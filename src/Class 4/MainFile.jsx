import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pagination from './Pagination'
import Cart from './Cart'
import ProductsDetails from './ProductsDetails'

const MainFile = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Pagination/>
        },
        {
            path:"/product/:id",
            element:<ProductsDetails/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default MainFile
