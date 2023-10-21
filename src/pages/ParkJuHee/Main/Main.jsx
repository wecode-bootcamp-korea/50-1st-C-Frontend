import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Main.scss';
import { Link } from 'react-router-dom';
import testInstance, { mainInstance } from '../../../utils/axios';

const Main = () => {
  const [postList, setPostList] = useState([]);

  // useEffect(() => {
  //   mainInstance.post('showPosts').then((res) => {
  //     setPostList(res.data.message);
  //   });
  // }, []);

  useEffect(() => {
    testInstance.get('postData.json').then((res) => {
      setPostList(res.data.message);
    });
  }, []);

  if (postList.length <= 0) {
    return null;
  }

  return (
    <div className="main">
      <div className="postList">
        <div className="postContainer">
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
        <div className="writeContainer">
          <div className="writeBtn">
            <Link to="/post-add" className="btn">
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
