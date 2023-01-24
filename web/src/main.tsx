import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from './routes/root/root'
import { GlobalCss } from './styles/global'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalCss/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
