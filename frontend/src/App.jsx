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
import usuarios from './pages/Usuarios/Usuario'
import EF from './pages/Fichas/EditarFicha'
import pdetail from './pages/Proyectos/Detalles'
import usuariosE from './pages/Usuarios/EditU'
import gestors from './pages/Gestores/Gestores'
import Cgestor from './pages/Gestores/CrearGestor'
import Egestor from './pages/Gestores/EditarGestor'

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
        <Route path='/users' Component={usuarios}></Route>
        <Route path='/editarFicha/:id' Component={EF}></Route>
        <Route path="/details/:id" Component={pdetail} />
        <Route path='/login/:id' Component={usuariosE}></Route>
        <Route path='/gestor' Component={gestors}></Route>
        <Route path='/Cgestor' Component={Cgestor}></Route>
        <Route path='/editarGestor/:id' Component={Egestor}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
