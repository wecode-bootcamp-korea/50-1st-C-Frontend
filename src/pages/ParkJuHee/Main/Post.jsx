import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import ProfileThumb from '../../../components/Edit/ProfileThumb';

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
      <div className="postList">
        <div className="writerDesktop">
          <div className="userContainer">
            <ProfileThumb src={profileImage} name="image" />
            <p className="nickname">{nickname}</p>
          </div>
          <div className="editContainer">
            <p className="createdTime">{created_at}</p>
            {isUser ? (
              <>
                <Link to={`/post-edit/${postId}`} className="post-edit">
                  수정
                </Link>
                <p className="postDelete" onClick={deletePost}>
                  삭제
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className="contentContainer">
          <Link to={`/post-view/${postId}`} className="content-area">
            <p className="content">{content}</p>
          </Link>
        </div>
        <div className="replyArea">
          <p className="replyCount">댓글 00</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
