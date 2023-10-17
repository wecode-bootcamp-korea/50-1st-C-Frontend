import React, { useEffect, useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsValid(isValidEmail(e.target.value));
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="logo-container">
          <div>
            <img className="logo" src="/images/Logo.png" alt="logo" />
            <img src="/images/logo_wecode.png" alt="logo_wecode" />
          </div>
        </div>
        <div className="form-container">
          <form className="login-form" onSubmit={handleSubmit}>
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
              disabled={!isValid || password.length < 5}
            >
              로그인
            </button>
          </form>
          <div className="login-options">
            <ul>
              <li>
                <Link to="/register" className="link_btn">
                  회원 가입
                </Link>
              </li>
              <li>
                <a href="/">비밀번호 찾기</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
