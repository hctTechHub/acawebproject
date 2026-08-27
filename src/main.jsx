import {BrowserRouter,RouterProvider} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/MainLayout'
import Router from './components/Router'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
