import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterSuccess.scss';

const RegisterSuccess = () => {
  return (
    <div className="RegisterSuccess">
      <div className="success-container">
        <div className="container">
          <div className="check-icon" />
          <p className="title">회원가입되었습니다!</p>
          <p className="subtitle">이제 로그인해주세요.</p>
        </div>
        <div className="btn-container">
          <Link to="/" className="btn">
            확인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
