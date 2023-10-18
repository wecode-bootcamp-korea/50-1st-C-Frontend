import React from 'react';
import './Main.scss';
import profile01 from './Pic01.png';
import profile02 from './Pic02.png';
import profile03 from './Pic03.png';

const Main = () => {
  return (
    <div className="main">
      <div className="page_frame">
        <img className="profile01" src={profile01} alt="프로필 사진1"></img>
        <p className="name_text">Name</p>
        <p className="time_text">00.00.00</p>
      </div>
      <div className="page_text_frame">
        <p className="page_text">
          일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌 리는
          사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능 적이라고
          믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
          ELIZA의 이름을 따서 명명되었다.
        </p>
      </div>
    </div>
  );
};

export default Main;
