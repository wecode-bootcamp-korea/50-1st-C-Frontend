import React, { useState } from 'react';
import './Write.scss';
import { Link, useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState('');

  const handlePost = () => {
    navigate('/main');
    console.log(textValue);
  };

  return (
    <div className="Write">
      <div className="write-container">
        <img className="profile-thumb" src="/images/sample.png" alt="프로필" />

        <div className="user-container">
          <p className="nickname">nickname</p>
          <textarea
            className="content"
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            placeholder="스레드를 시작하세요"
            maxLength="150"
          />
        </div>
      </div>
      <div className="post-action">
        <Link to="/main" className="btn-border">
          취소
        </Link>
        <button onClick={handlePost} className="btn">
          게시
        </button>
      </div>
    </div>
  );
};

export default Write;
