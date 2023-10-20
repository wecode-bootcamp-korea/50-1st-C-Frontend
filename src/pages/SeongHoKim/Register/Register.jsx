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

  return (
    <div className="registerPage">
      <div className="headerFrame">
        <img className="buttonIcon" src={backButton}></img>
        <button className="backButton" onClick={goToLogin}>
          뒤로
        </button>
        <p className="signupMainText">회원가입</p>
      </div>
      <div className="infoInputFrame">
        <div className="textInfoFrame">
          <p className="info">기본 정보</p>
          <p className="required">필수 사항</p>
        </div>
        <input
          className="emailInput"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={saveUserEmail}
        ></input>
        <input
          className="passwordInput"
          type="password"
          placeholder="비밀번호"
          value={email_pw}
          onChange={saveUserPassword}
        ></input>
        <input
          className="rePasswordInput"
          type="password"
          placeholder="비밀번호 확인"
          value={email_re_pw}
          onChange={saveUserRePassword}
        ></input>
      </div>
      <div className="nicknameInfoFrame">
        <div className="textNicknameFrame">
          <p className="nicknameInfoText">닉네임</p>
          <p className="optionalInfoText">선택 사항</p>
        </div>
        <input
          className="nickname"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={saveUserNickname}
        ></input>
      </div>

      <div className="phoneNumberFrame">
        <p className="phoneText">전화번호</p>
        <p className="optionalInfoText">선택 사항</p>
      </div>
      <div className="phonenumberSelectFrame">
        <select className="phonenumberSelect">
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
      <div className="birthdayFrame">
        <p className="birthdayText">생일</p>
        <p className="selectedText03">선택 사항</p>
      </div>
      <div className="birthdaySelectFrame">
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
      <div className="signupButtonFrame">
        <button
          className={isInvalid ? 'signupButton' : 'disabledSignupButton'}
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
  { length: 11 },
  (_, i) => `${i + 1990}년`,
);
const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
