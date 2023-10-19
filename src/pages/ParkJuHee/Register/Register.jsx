// Register.js
import React, { useState } from 'react';
import './Register.scss';
import OptionBox from './OptionBox';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    phoneNumber: '',
    isValid: true,
  });
  const { email, password, passwordConfirm, userName, phoneNumber, isValid } =
    inputValue;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
      isValid: !isValidEmail(value),
    }));
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleRegister = (body) => {
    fetch('http://10.58.52.215:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'SIGNUP SUCCESS') {
          navigate('/registerSuccess');
        } else {
          alert('회원가입 실패!');
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    let body = {
      email: email,
      password: password,
      nickname: userName,
      phone_number: userPhone,
      birth_day: userBirth,
    };
    handleRegister(body);
  };
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phoneFront, setPhoneFront] = useState('010');

  const userBirth =
    birthYear === '' || birthMonth === '' || birthDay === ''
      ? null
      : birthYear +
        String(birthMonth).padStart(2, 0) +
        String(birthDay).padStart(2, 0);

  const userPhone =
    phoneFront === '' || phoneNumber === '' ? null : phoneFront + phoneNumber;

  return (
    <div className="register">
      <div className="container">
        <div className="main-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="page-title-info">
              <h1>회원가입</h1>
            </div>
            <div className="email-info">
              <div className="label-options">
                <label htmlFor="userEmail">기본정보</label>
                <p className="required">필수사항</p>
              </div>

              <input
                type="email"
                placeholder="이메일"
                id="userEmail"
                name="email"
                value={email}
                onChange={handleInput}
                required
                autoComplete="email"
              />

              <input
                type="password"
                placeholder="비밀번호"
                id="password"
                name="password"
                value={password}
                onChange={handleInput}
                required
              />

              <input
                type="password"
                placeholder="비밀번호 확인"
                id="passwordConfirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleInput}
                required
              />
            </div>

            <div className="name-info">
              <div className="label-options">
                <label htmlFor="name">닉네임과 프로필 이미지</label>
                <p className="required">필수사항</p>
              </div>
              <input
                type="text"
                placeholder="닉네임"
                id="name"
                name="userName"
                value={userName}
                onChange={handleInput}
                autoComplete="name"
                required
              />
            </div>

            <div className="phone-number-info">
              <div className="label-options">
                <label htmlFor="phoneNumber">전화번호</label>
                <p>선택사항</p>
              </div>
              <div className="phone-number">
                <div className="phone-front">
                  <OptionBox
                    date="PHONEFRONT"
                    phoneFront={phoneFront}
                    setPhoneFront={setPhoneFront}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="휴대폰 번호를 입력해주세요."
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  maxLength="8"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="birthday-info">
              <div className="label-options">
                <p className="label">생일</p>
                <p>선택사항</p>
              </div>
              <div className="birthday-select">
                <div className="birth-date">
                  <OptionBox
                    date="YEAR"
                    birthYear={birthYear}
                    setBirthYear={setBirthYear}
                    suffix="년"
                  />
                  <OptionBox
                    date="MONTH"
                    birthMonth={birthMonth}
                    setBirthMonth={setBirthMonth}
                    suffix="월"
                  />
                  <OptionBox
                    date="DAY"
                    birthDay={birthDay}
                    setBirthDay={setBirthDay}
                    suffix="일"
                  />
                </div>
              </div>
            </div>

            <div className="submit-container">
              <button
                type="submit"
                className="btn"
                disabled={
                  !isValid || password.length < 5 || passwordConfirm.length < 5
                }
              >
                회원 가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
