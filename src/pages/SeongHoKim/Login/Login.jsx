import React from 'react';
import './Login.scss';
import logo1 from './Wecode_Logo01.png';
import logo2 from './Wecode_Logo02.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // 회원가입 페이지 이동
  const moveNavigate = useNavigate();
  const goToSignUp = () => {
    moveNavigate('/Register');
  };
  return (
    <div className="login_page">
      <div className="logo_frame">
        <img className="big_logo" src={logo1} alt="위코드 로고1"></img>
        <img className="small_logo" src={logo2} alt="위코드 로고2"></img>
      </div>
      <div className="input_login_frame">
        <input className="email" type="text" placeholder="이메일"></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
        ></input>
        <div className="login_button_frame">
          <button className="login_button">로그인</button>
        </div>
        <div className="side_button_frame">
          <button className="signup_button" onClick={goToSignUp}>
            회원 가입
          </button>
          <div className="wall">|</div>
          <button className="password_button">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
