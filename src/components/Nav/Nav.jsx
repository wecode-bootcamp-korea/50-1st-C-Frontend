import React from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="nav">
      <div className="back-icon">
        <p onClick={back} className="back-nav">
          뒤로
        </p>
      </div>
    </div>
  );
};

export default Nav;
