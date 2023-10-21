import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { mainInstance } from '../../../utils/axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValid(isValidEmail(value));
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleLogin = (body) => {
    mainInstance.post('users', { body: body }).then((res) => {
      if (res.message === 'LOGIN SUCCESS') {
        alert('로그인 성공!');
        navigate('/post');
        localStorage.setItem('jwtToken', res.jwtToken);
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('profileImage', res.profileImage);
      } else {
        alert('로그인 실패!');
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      email,
      password,
    };
    handleLogin(body);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="logoContainer">
          <div>
            <img className="logo" src="/images/Logo.png" alt="logo" />
            <img src="/images/logo_wecode.png" alt="logo_wecode" />
          </div>
        </div>
        <div className="formContainer">
          <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email" />
            <input
              type="email"
              placeholder="이메일"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
            <label htmlFor="password" />
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />

            <button
              type="submit"
              className="btn"
              disabled={!isValid || password.length < 10}
            >
              로그인
            </button>
          </form>
          <div className="loginOptions">
            <ul>
              <li>
                <Link to="/register" className="link">
                  회원 가입
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  비밀번호 찾기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
