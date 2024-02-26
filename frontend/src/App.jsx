import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login'
import Register from './pages/register'
import  principal  from './pages/principal'
import proyecto from './pages/Proyectos/CrearProyecto'
import edieli from './pages/Proyectos/EditarProyecto'
import Cficha from './pages/Fichas/CrearFicha'
import fichas from './pages/Fichas/Fichas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={principal}></Route>
        <Route path='/login/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/proyecto' Component={proyecto}></Route>
        <Route path='/edel' Component={edieli}></Route>
        <Route path='/ficha' Component={Cficha}></Route>
        <Route path='/fichas' Component={fichas}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
