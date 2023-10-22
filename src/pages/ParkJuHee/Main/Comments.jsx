import React from 'react';
import './Comments.scss';
import ProfileThumb from '../../../components/Edit/ProfileThumb';

const Comments = ({ key, nickname, comment, createdAt, profileImage }) => {
  return (
    <div className="comments">
      <div className="commentList">
        <div className="writerDesktop">
          <div className="userContainer">
            <ProfileThumb src={profileImage} name="comment" />
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
