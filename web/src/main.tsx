import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from './components/routes/root'
import { GlobalCss } from './styles/global'
import Nav from './components/navbar'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalCss/>
    <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
