import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/ParkJuHee/Login/Login';
import Main from './pages/ParkJuHee/Main/Main';
import Register from './pages/ParkJuHee/Register/Register';
import Nav from './components/Nav/Nav';

const Router = () => {
  const NavLayout = () => (
    <>
      <Nav />
      <Outlet />
    </>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<NavLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
