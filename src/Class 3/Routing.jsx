import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import Mern from './Pages/Children/Mern'
import Java from './Pages/Children/Java'
import Python from './Pages/Children/Python'
import DotNet from './Pages/Children/DotNet'
import Navbar from './Pages/Navbar'
const Routing = () => {
      let routes=createBrowserRouter([
        {
          path:"/",
          element:<>
            <Navbar/>
            <Home/>
          </>
        },
        {
          path:"/about",
          element:<>
          <Navbar/>
            <About/>
          </>
        },
        {
          path:"/services",
          element:<>
          <Navbar/>
            <Services/>
          </>,
          children:[
            {
              path:"mern",
              element:<Mern/>
            },
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"python",
              element:<Python/>
            },
            {
              path:"dotnet",
              element:<DotNet/>
            }
          ]
        },
        {
          path:"/contact/:id",
          element:<>
          <Navbar/>
            <Contact/>
          </>
        },
        {
          path:"*",
          element:<>
            <PageNotFound/>
          </>
        }
      ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default Routing
