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
  // 회원가입 페이지 이동 성공
  const goToCompliete = () => {
    moveNavigate('/Signup_Compliete');
  };
  // 기본정보 필수사항
  // 이메일
  const [email, setEmail] = useState('');
  const saveUserEmail = event => {
    setEmail(event.target.value);
  };
  // 비밀번호
  const [email_pw, setEmail_pw] = useState('');
  const saveUserPassword = event => {
    setEmail_pw(event.target.value);
  };
  // 비밀번호 확인
  const [email_re_pw, setEmail_re_pw] = useState('');
  const saveUserRePassword = event => {
    setEmail_re_pw(event.target.value);
  };
  // 닉네임
  const [nickname, setNickname] = useState('');
  const saveUserNickname = event => {
    setNickname(event.target.value);
  };
  // 회원가입 조건 : ID : @,. PW : 10자리 이상
  const isInvalid =
    email.includes('@', '.') && email_pw.length && email_re_pw.length >= 10;

  // const goToSignup = () => {
  //   fetch('http://10.58.52.139:8000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: id,
  //       password: pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.message === 'err') {
  //         alert('입력값을 확인해 주세요.');
  //       } else {
  //         alert('로그인 되었습니다.');
  //         localStorage.setItem('token', data.message);
  //         moveNavigate('/main');
  //       }
  //     });
  // };

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
          <option value="number_010">010</option>
          <option value="number_011">011</option>
          <option value="number_016">016</option>
          <option value="number_017">017</option>
          <option value="number_018">018</option>
        </select>
        <input
          className="phonenumber"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요"
        />
      </div>
      <div className="birthday_frame">
        <p className="birthday_text">생일</p>
        <p className="selected_text03">선택 사항</p>
      </div>
      <div className="birthday_select_frame">
        <select className="year">
          <option value="1990년">1990년</option>
          <option value="1991년">1991년</option>
          <option value="1992년">1992년</option>
          <option value="1993년">1993년</option>
          <option value="1994년">1994년</option>
          <option value="1995년">1995년</option>
          <option value="1996년">1996년</option>
          <option value="1997년">1997년</option>
          <option value="1998년">1998년</option>
          <option value="1999년">1999년</option>
        </select>
        <select className="month">
          <option value="1월">1월</option>
          <option value="2월">2월</option>
          <option value="3월">3월</option>
          <option value="4월">4월</option>
          <option value="5월">5월</option>
          <option value="6월">6월</option>
          <option value="7월">7월</option>
          <option value="8월">8월</option>
          <option value="9월">9월</option>
          <option value="10월">10월</option>
          <option value="11월">11월</option>
          <option value="12월">12월</option>
        </select>
        <select className="day">
          <option value="1일">1일</option>
          <option value="2일">2일</option>
          <option value="3일">3일</option>
          <option value="4일">4일</option>
          <option value="5일">5일</option>
          <option value="6일">6일</option>
          <option value="7일">7일</option>
          <option value="8일">8일</option>
          <option value="9일">9일</option>
          <option value="10일">10일</option>
        </select>
      </div>
      <div className="signup_button_frame">
        <button
          className={isInvalid ? 'signup_button' : 'disabled_signup_button'}
          disabled={isInvalid ? false : true}
          onClick={goToCompliete}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Register;
