import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { SnackbarProvider } from "notistack";
import { AppProvider } from './AppContext';
import Profile from './components/Profile';
import UserAuth from './UserAuth';
import Footer from './components/Footer';
import UploadNovel from './components/UploadNovel';
import {Toaster} from 'react-hot-toast'
import Books from './components/Books';

const App = () => {
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
      <SnackbarProvider>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/books' element={<Books />} />
          <Route path='/profile' element={<UserAuth> <Profile /> </UserAuth>} />
          <Route path='/upload' element={<UserAuth> <UploadNovel /> </UserAuth>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AppProvider>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App