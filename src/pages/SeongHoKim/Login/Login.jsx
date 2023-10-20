import React, { useState } from 'react';
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
  // input 입력(id)
  const [id, setID] = useState('');
  const saveUserID = event => {
    setID(event.target.value);
    console.log(id);
  };

  // input 입력(pw)
  const [pw, setPW] = useState('');
  const saveUserPW = event => {
    setPW(event.target.value);
    console.log(pw);
  };
  // ID, PW 조건 : 아이디는 @와 .이 포함되고 비밀번호는 10글자 이상일때
  const isInvalid = id.includes('@', '.') && pw.length >= 10;
  // 로그인 버튼 클릭
  const goToMain = () => {
    fetch('http://10.58.52.215:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'LOGIN SUCCESS') {
          alert('로그인 되었습니다.');
          localStorage.setItem('token', data.message);
          moveNavigate('/main');
        } else if (data.message === 'INVALID EMAIL OR PASSWORD') {
          alert('가입되지 않은 정보입니다.');
        }
        console.log(data);
      });
  };

  return (
    <div className="loginPage">
      <div className="logoFrame">
        <img className="bigLogo" src={logo1} alt="위코드 로고1" />
        <img className="smallLogo" src={logo2} alt="위코드 로고2" />
      </div>
      <div className="inputLoginFrame">
        <input
          className="email"
          type="text"
          placeholder="이메일"
          onChange={saveUserID}
        ></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPW}
        ></input>
        <div className="loginButtonFrame">
          <button
            className={isInvalid ? 'loginButton' : 'disableLoginButton'}
            disabled={isInvalid ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
        <div className="sideButtonFrame">
          <button className="signupButton" onClick={goToSignUp}>
            회원 가입
          </button>
          <div className="wall">|</div>
          <button className="passwordButton">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
