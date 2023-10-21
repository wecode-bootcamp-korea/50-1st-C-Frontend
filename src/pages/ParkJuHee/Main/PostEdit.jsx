import React, { useEffect, useState } from 'react';
import './PostEdit.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostEdit = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem('jwtToken');
  const userName = localStorage.getItem('userName');
  const profileImage = localStorage.getItem('profileImage');
  const [editContent, setEditContent] = useState('');

  const handlePost = (body) => {
    fetch('http://10.58.52.215:8000/writePost', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: userToken,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'EDITED SUCCESS') {
          alert('글 수정 완료!');
          navigate('/post');
        } else {
          alert('failed');
        }
      });
  };

  const handleClick = () => {
    let body = {
      content: editContent,
    };
    handlePost(body);
  };

  return (
    <div className="postEdit">
      <div className="writeContainer">
        <img className="profileThumb" src={profileImage} alt="프로필" />

        <div className="userContainer">
          <p className="nickname">{userName}</p>
          <textarea
            className="content"
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
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
          수정
        </button>
      </div>
    </div>
  );
};

export default PostEdit;
