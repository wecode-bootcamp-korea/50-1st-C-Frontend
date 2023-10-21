import React, { useState } from 'react';
import './PostAdd.scss';
import { Link, useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState('');
  const userToken = localStorage.getItem('jwtToken');
  const userName = localStorage.getItem('userName');
  const profileImage = localStorage.getItem('profileImage');

  const handlePost = (body) => {
    fetch('http://10.58.52.215:8000/writePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: userToken,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'UPLOAD SUCCESS') {
          alert('글 등록 완료!');
          navigate('/post');
        } else {
          alert('failed');
        }
      });
  };

  const handleClick = () => {
    let body = {
      content: textValue,
    };
    handlePost(body);
  };

  return (
    <div className="postAdd">
      <div className="writeContainer">
        <img className="profileThumb" src={profileImage} alt="프로필" />

        <div className="userContainer">
          <p className="nickname">{userName}</p>
          <textarea
            className="content"
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            placeholder="스레드를 시작하세요"
            maxLength="150"
          />
        </div>
      </div>
      <div className="postAction">
        <Link to="/post" className="btnBorder">
          취소
        </Link>
        <button onClick={handleClick} className="btn">
          게시
        </button>
      </div>
    </div>
  );
};

export default PostAdd;
