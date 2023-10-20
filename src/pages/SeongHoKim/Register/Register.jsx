import React, { useState } from 'react';
import './Register.scss';
import backButton from './Back_button_icon.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // 로그인 페이지로 이동(뒤로)
  const moveNavigate = useNavigate();
  const goToLogin = () => {
    moveNavigate('/Login');
  };
  // 기본정보 필수사항
  // 이메일
  const [email, setEmail] = useState('');
  const saveUserEmail = event => {
    setEmail(event.target.value);
    console.log(email);
  };
  // 비밀번호
  const [email_pw, setEmail_pw] = useState('');
  const saveUserPassword = event => {
    setEmail_pw(event.target.value);
    console.log(email_pw);
  };
  // 비밀번호 확인
  const [email_re_pw, setEmail_re_pw] = useState('');
  const saveUserRePassword = event => {
    setEmail_re_pw(event.target.value);
    console.log(email_re_pw);
  };
  // 닉네임
  const [nickname, setNickname] = useState('');
  const saveUserNickname = event => {
    setNickname(event.target.value);
    console.log(nickname);
  };
  // 전화번호
  const [phonenumber, setPhonenumber] = useState('');
  const saveUserPhoneNumber = event => {
    setPhonenumber(event.target.value);
    console.log(phonenumber);
  };

  // 회원가입 조건 : ID : @,. PW : 10자리 이상
  const isInvalid =
    email.includes('@', '.') && email_pw.length && email_re_pw.length >= 10;
  //
  const goToSignup = () => {
    fetch('http://10.58.52.241:8000/users/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: email_pw,
        nickname: nickname,
        phonenumber: phonenumber,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생');
      })
      .then(data => {
        if (data.message === 'SIGNUP SUCCESS') {
          moveNavigate('/signup_compliete');
        } else {
          alert('회원가입 정보를 입력해주세요.');
        }
      });
  };

  console.log(BIRTHDAY_YEAR_LIST);

  return (
    <div className="register_page">
      <div className="header_frame">
        <img className="button_icon" src={backButton}></img>
        <button className="back_button" onClick={goToLogin}>
          뒤로
        </button>
        <p className="signup_main_text">회원가입</p>
      </div>
      <div className="info_input_frame">
        <div className="text_info_frame">
          <p className="info">기본 정보</p>
          <p className="Required">필수 사항</p>
        </div>
        <input
          className="email_input"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={saveUserEmail}
        ></input>
        <input
          className="password_input"
          type="password"
          placeholder="비밀번호"
          value={email_pw}
          onChange={saveUserPassword}
        ></input>
        <input
          className="re_password_input"
          type="password"
          placeholder="비밀번호 확인"
          value={email_re_pw}
          onChange={saveUserRePassword}
        ></input>
      </div>
      <div className="nickname_info_frame">
        <div className="text_nickname_frame">
          <p className="nickname_info_text">닉네임</p>
          <p className="optional_info_text">선택 사항</p>
        </div>
        <input
          className="nickname"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={saveUserNickname}
        ></input>
      </div>

      <div className="phone_number_frame">
        <p className="phone_text">전화번호</p>
        <p className="optional_info_text">선택 사항</p>
      </div>
      <div className="phonenumber_select_frame">
        <select className="phonenumber_select">
          {PHONE_NUMBER_LIST.map((phonenumber, index) => (
            <option key={index}>{phonenumber}</option>
          ))}
        </select>
        <input
          className="phonenumber"
          type="text"
          maxLength={8}
          placeholder="휴대폰 번호를 입력해주세요"
          onChange={saveUserPhoneNumber}
        />
      </div>
      <div className="birthday_frame">
        <p className="birthday_text">생일</p>
        <p className="selected_text03">선택 사항</p>
      </div>
      <div className="birthday_select_frame">
        <select className="year">
          {BIRTHDAY_YEAR_LIST.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select className="month">
          {BIRTHDAY_MONTH_LIST.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
        <select className="day">
          {BIRTHDAY_DAY_LIST.map((day, index) => (
            <option key={index}>{day}</option>
          ))}
        </select>
      </div>
      <div className="signup_button_frame">
        <button
          className={isInvalid ? 'signup_button' : 'disabled_signup_button'}
          disabled={isInvalid ? false : true}
          onClick={goToSignup}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Register;

const PHONE_NUMBER_LIST = ['010', '016', '017', '018', '019'];
const BIRTHDAY_YEAR_LIST = Array.from(
  { length: 12 },
  (_, i) => `${i + 1990}년`,
);
const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const BIRTHDAY_DAY_LIST = Array.from({ length: 30 }, (_, i) => `${i + 1}일`);
