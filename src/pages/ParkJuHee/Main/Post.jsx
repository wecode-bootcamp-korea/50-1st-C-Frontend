import React from 'react';
import './Post.scss';

const Post = () => {
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
            <p className="nickname">이름</p>
          </div>
          <p className="created-time">00.00.00</p>
        </div>
        <div className="content-area">
          <p className="content">
            일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
            사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
            믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
            ELIZA의 이름을 따서 명명되었다.
          </p>
        </div>
        <div className="reply-area">
          <p className="reply-count">댓글 00</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
