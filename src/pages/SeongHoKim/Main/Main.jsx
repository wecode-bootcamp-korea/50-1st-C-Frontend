import React from 'react';
import './Main.scss';
import profile01 from './Pic01.png';
import { useState } from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="page_frame">
        <img className="profile01" src={profile01} alt="프로필 사진1"></img>
        <p className="name_text">Name</p>
        <p className="time_text">00.00.00</p>
      </div>
      <div className="page_text_frame">
        <p className="page_text">글 내용 폭에 맞추어 줄바꿈 됩니다.</p>
      </div>
    </div>
  );
};

export default Main;
