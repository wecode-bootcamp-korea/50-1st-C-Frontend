import React, { useState } from 'react';
import './Edit.scss';
import '../Button.scss';
import { Link, useNavigate } from 'react-router-dom';
import { mainInstance } from '../../utils/axios';
import Write from './Write';
import Button from '../Button';

const Edit = ({ isEdit, postId }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const profileImage = localStorage.getItem('profileImage');
  const [textValue, setTextValue] = useState('');

  const writePost = (body) => {
    mainInstance.post('writePost', { body: body }).then((res) => {
      if (res.message === 'UPLOAD SUCCESS') {
        alert('글 등록 완료!');
        navigate('/post');
      } else {
        alert('failed');
      }
    });
  };

  const editPost = (body) => {
    mainInstance
      .patch('writePost', { header: { id: postId.postid }, body: body })
      .then((res) => {
        if (res.message === 'EDITED SUCCESS') {
          alert('글 수정 완료!');
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
    isEdit ? editPost(body) : writePost(body);
  };

  return (
    <div className="edit">
      <div className="container">
        <Write
          profileImage={profileImage}
          userName={userName}
          content={textValue}
          setTextValue={setTextValue}
        />
        <div className="postAction">
          <Link to="/post" className="btn-line">
            취소
          </Link>

          <Button
            text={isEdit ? '수정' : '게시'}
            type="btn"
            handleClick={handleClick}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
