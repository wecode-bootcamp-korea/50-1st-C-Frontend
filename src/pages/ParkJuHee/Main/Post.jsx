import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({
  nickname,
  profileImage,
  content,
  created_at,
  postId,
  isUser,
}) => {
  const deletePost = () => {
    alert('삭제하시겠습니까?');
    alert('삭제되었습니다');
  };
  return (
    <div className="post">
      <div className="post-list">
        <div className="writer-desktop">
          <div className="user-container">
            <img className="profile-thumb" src={profileImage} alt="프로필" />
            <p className="nickname">{nickname}</p>
          </div>
          <div className="edit-container">
            <p className="created-time">{created_at}</p>
            {isUser ? (
              <>
                <Link to={`/post/edit/${postId}`} className="post-edit">
                  수정
                </Link>
                <p className="post-delete" onClick={deletePost}>
                  삭제
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className="content-container">
          <Link to={`/post/view/${postId}`} className="content-area">
            <p className="content">{content}</p>
          </Link>
        </div>
        <div className="reply-area">
          <p className="reply-count">댓글 00</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
