import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { MasterLayout } from './MasterLayout.tsx'
import { Login } from './Login.tsx'
import { Register } from './Register.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<MasterLayout/>,
    children:[
      {index:true, element: <App/>},
      {path: "login", element: <Login/>},
      {path: "register", element: <Register/>}
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
