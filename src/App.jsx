import './App.css'
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <ToastContainer/>
       <NavBar/>
       <Routes>
        <Route path='/cart' exact Component={Cart}/>
        <Route path='/' exact Component={Home}/>
        <Route path='/not-found' Component={NotFound}/>
       </Routes>
        {/* <Navigate to="/not-found" replace /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
