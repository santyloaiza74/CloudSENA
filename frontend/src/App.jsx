import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login'
import Register from './pages/register'
import  principal  from './pages/principal'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={principal}></Route>
        <Route path='/login/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
