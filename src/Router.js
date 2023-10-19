import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/ParkJuHee/Login/Login';
import Main from './pages/ParkJuHee/Main/Main';
import Register from './pages/ParkJuHee/Register/Register';
import Nav from './components/Nav/Nav';
import RegisterSuccess from './pages/ParkJuHee/Register/RegisterSuccess';
import PostAdd from './pages/ParkJuHee/Main/PostAdd';
import PostEdit from './pages/ParkJuHee/Main/PostEdit';
import PostView from './pages/ParkJuHee/Main/PostView';
import Comments from './pages/ParkJuHee/Main/Comments';

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
        <Route path="/post" element={<Main />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:postid" element={<PostEdit />} />
        <Route path="/post/view/:postid" element={<PostView />} />
        <Route element={<NavLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/registersuccess" element={<RegisterSuccess />} />
          <Route path="/comment" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
