import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/ParkJuHee/Login/Login';
import Main from './pages/ParkJuHee/Main/Main';
import Register from './pages/ParkJuHee/Register/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parkjuhee-login" element={<Login />} />
        <Route path="/parkjuhee-main" element={<Main />} />
        <Route path="/parkjuhee-register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
