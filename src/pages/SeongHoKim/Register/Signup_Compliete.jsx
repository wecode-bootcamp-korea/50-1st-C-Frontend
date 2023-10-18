import React from 'react';
import './Signup_Compliete.scss';
import backButton from './Back_button_icon.png';
import compliete_icon from './checkIcon.png';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup_Compliete = () => {
  const moveLogin = useNavigate();
  // 로그인 페이지로 이동
  const goToLogin = () => {
    moveLogin('/login');
  };
  // 회원가입 페이지로 이동
  const goToSignUp = () => {
    moveLogin('/register');
  };

  return (
    <div className="compliete">
      <div className="header_frame">
        <img className="backButton_icon" src={backButton}></img>
        <button className="button_back" onClick={goToSignUp}>
          뒤로
        </button>
      </div>
      <div className="compliete_icon_frame">
        <img className="compliete_icon" src={compliete_icon}></img>
      </div>
      <div className="compliete_text_frame">
        <p className="compliete_text">회원 가입되었습니다!</p>
        <p className="login_text">이제 로그인해주세요.</p>
      </div>
      <div className="check_button_frame">
        <button className="check_button" onClick={goToLogin}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Signup_Compliete;
