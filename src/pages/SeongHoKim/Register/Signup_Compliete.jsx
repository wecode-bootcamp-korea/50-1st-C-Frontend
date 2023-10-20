import React from 'react';
import './Signup_Compliete.scss';
import backButton from './Back_button_icon.png';
import compliete_icon from './checkIcon.png';
import { useNavigate } from 'react-router-dom';

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
      <div className="headerFrame">
        <img className="backButtonIcon" src={backButton}></img>
        <button className="buttonBack" onClick={goToSignUp}>
          뒤로
        </button>
      </div>
      <div className="complieteIconFrame">
        <img className="complieteIcon" src={compliete_icon}></img>
      </div>
      <div className="complieteTextFrame">
        <p className="complieteText">회원 가입되었습니다!</p>
        <p className="loginText">이제 로그인해주세요.</p>
      </div>
      <div className="checkButtonFrame">
        <button className="checkButton" onClick={goToLogin}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Signup_Compliete;
