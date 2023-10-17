import React from 'react';
import './Post.scss';

const Post = ({ nickname, content, created_at }) => {
  return (
    <div className="Post">
      <div className="post-list">
        <div className="writer-desktop">
          <div className="user-container">
            <img
              className="profile-thumb"
              src="/images/sample.png"
              alt="프로필"
            />
            <p className="nickname">{nickname}</p>
          </div>
          <p className="created-time">{created_at}</p>
        </div>
        <div className="content-area">
          <p className="content">{content}</p>
        </div>
        <div className="reply-area">
          <p className="reply-count">댓글 00</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
