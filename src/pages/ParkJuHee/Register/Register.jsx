// Register.js
import React, { useState } from 'react';
import './Register.scss';
import OptionBox from './OptionBox';
import { useNavigate } from 'react-router-dom';
import { mainInstance } from '../../../utils/axios';
import Button from '../../../components/Button';
import Input from '../../../components/Edit/Input';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setIsValid(emailPattern.test(email));
  };

  const handlePhone = (e) => {
    let phoneNum = e.target.value;
    phoneNum = phoneNum.replace(/[^0-9.]/g, '');
    phoneNum = phoneNum.replace(/(\d{4})(\d)/, '$1-$2');
    setPhoneNumber(phoneNum.slice(0, 9));
  };
  const handleRegister = (body) => {
    mainInstance.post('user/signup', { body: body }).then((res) => {
      if (res.message === 'SIGNUP SUCCESS') {
        navigate('/register-success');
      } else {
        alert('회원가입 실패!');
      }
    });
  };
  const handleClick = () => {
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
        <div className="mainFormContainer">
          <form className="registerForm">
            <div className="pageTitleInfo">
              <h1>회원가입</h1>
            </div>
            <div className="emailInfo">
              <div className="labelOptions">
                <label htmlFor="userEmail">기본정보</label>
                <p className="required">필수사항</p>
              </div>

              <Input
                type="email"
                placeholder="이메일"
                id="userEmail"
                value={email}
                onChange={handleEmail}
                required={true}
              />

              <Input
                type="password"
                placeholder="비밀번호"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />

              <Input
                type="password"
                placeholder="비밀번호 확인"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required={true}
              />
            </div>

            <div className="nameInfo">
              <div className="labelOptions">
                <label htmlFor="name">닉네임과 프로필 이미지</label>
                <p className="required">필수사항</p>
              </div>
              <Input
                type="text"
                placeholder="닉네임"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required={true}
              />
            </div>

            <div className="phoneNumberInfo">
              <div className="labelOptions">
                <label htmlFor="phoneNumber">전화번호</label>
                <p>선택사항</p>
              </div>
              <div className="phoneNumber">
                <div className="phoneFront">
                  <OptionBox
                    date="PHONEFRONT"
                    phoneFront={phoneFront}
                    setPhoneFront={setPhoneFront}
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="휴대폰 번호를 입력해주세요."
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhone}
                  required={false}
                />
              </div>
            </div>

            <div className="birthdayInfo">
              <div className="labelOptions">
                <p className="label">생일</p>
                <p>선택사항</p>
              </div>
              <div className="birthdaySelect">
                <div className="birthDate">
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

            <div className="submitContainer">
              <Button
                text="회원 가입"
                type="btn-long"
                handleClick={handleClick}
                disabled={!isValid || password.length < 10}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
