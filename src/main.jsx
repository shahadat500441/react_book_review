import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routs/Routes';
import  { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <>
       <RouterProvider router={router} />
       <Toaster></Toaster>
  </>,
)
