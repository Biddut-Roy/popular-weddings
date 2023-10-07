import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Routers'
import GlobalContex from './Context/GlobalContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <GlobalContex>
        <RouterProvider router={router}></RouterProvider>
    </GlobalContex>
  </React.StrictMode>,
)
