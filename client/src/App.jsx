import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import './App.css'
import User from './Components/User'
import Add from './Components/Add'
import Edit from './Components/Edit'


function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>
    },
    {
      path:"/add",
      element: <Add/>
    },
    {
      path:"/edit/:id",
      element: <Edit/>
    },
  ])

  return (
    <>
      <RouterProvider router={route}>

      </RouterProvider>
    </>
  )
}

export default App
