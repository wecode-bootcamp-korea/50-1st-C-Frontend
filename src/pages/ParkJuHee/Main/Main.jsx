import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Main.scss';

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
                key={post.id}
                nickname={post.nickname}
                content={post.content}
                created_at={post.created_at}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="write-container">
          <button className="btn">글쓰기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
