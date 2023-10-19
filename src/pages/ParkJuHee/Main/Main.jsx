import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  const [postList, setPostList] = useState([]);
  const userToken = localStorage.getItem('userToken');

  // 백엔드 서버 http://10.58.52.215:8000/showPosts
  // mock data /data/postData.json
  useEffect(() => {
    fetch('/data/postData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: userToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostList(data.message);
      });
  }, [userToken]);

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
                key={post.id}
                postId={post.id}
                nickname={post.nickname}
                profileImage={post.profile_image}
                content={post.content}
                created_at={post.created_at}
                isUser={post.isUser}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="write-container">
          <div className="write-btn">
            <Link to="/post/add" className="btn">
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
