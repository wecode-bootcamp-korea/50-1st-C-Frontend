import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('/data/postData.json')
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);

  if (postList.length <= 0) {
    return null;
  }

  return (
    <div className="Main">
      <div className="post-list">
        <div className="post-container">
          <div className="post">
            {postList.map((post) => (
              <Post
                key={post.postId}
                nickname={post.nickname}
                profileImage={post.profileImage}
                content={post.content}
                created_at={post.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="write-container">
          <div className="write-btn">
            <Link to="/write" className="btn">
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
