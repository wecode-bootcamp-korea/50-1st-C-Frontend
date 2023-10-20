import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/SeongHoKim/Login/Login';
import Main from './pages/SeongHoKim/Main/Main';
import Register from './pages/SeongHoKim/Register/Register';
import Signup_Compliete from './pages/SeongHoKim/Register/Signup_Compliete';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-compliete" element={<Signup_Compliete />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
