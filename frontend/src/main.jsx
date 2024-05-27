import React from 'react'
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './router.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
     <RouterProvider router={router} />
  </CookiesProvider>,
)
