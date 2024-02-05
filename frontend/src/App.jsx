import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
