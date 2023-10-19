import React from 'react';
import './Comments.scss';

const Comments = () => {
  return (
    <div className="Comments">
      <div className="comment-list">
        <div className="writer-desktop">
          <div className="user-container">
            <img className="profile-thumb" src="" alt="프로필" />
            <div className="content-container">
              <p className="nickname">nickname</p>
              <p className="content">content</p>
            </div>
          </div>
          <div className="edit-container">
            <p className="created-time">created_at</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
