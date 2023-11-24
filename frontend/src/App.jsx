import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App