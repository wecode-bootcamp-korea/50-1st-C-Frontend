import React from 'react';
import './Comments.scss';

const Comments = ({ key, nickname, comment, createdAt, profileImage }) => {
  return (
    <div className="comments">
      <div className="commentList">
        <div className="writerDesktop">
          <div className="userContainer">
            <img className="profileThumb" src={profileImage} alt="프로필" />
            <div className="contentContainer">
              <p className="nickname">{nickname}</p>
              <p className="comment">{comment}</p>
            </div>
          </div>
          <div className="editContainer">
            <p className="createdTime">{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
