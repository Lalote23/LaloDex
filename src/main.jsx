import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Home } from "./Home";
import { NationalDex } from "./NationalDex";
import { TeamBuilder } from "./TeamBuilder";
import { Registro } from "./Registro";
import { ListaUsuarios } from "./ListaUsuarios";
import { LoginPage } from "./LoginPage";


const router = createHashRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/NationalDex',
    element: <NationalDex/>
  },
  {
    path:'/TeamBuilder',
    element: <TeamBuilder/>
  },
  {
    path:'/GymLeaders',
    element: <GymLeaders/>
  },
  {
    path:'/ListaUsuarios',
    element: <ListaUsuarios/>
  },
  {
    path:'/Registro',
    element: <Registro/>
  },
  {
    path:'/Login',
    element: <LoginPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
