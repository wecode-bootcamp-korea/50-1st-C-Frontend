import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

import './PostView.scss';

const PostView = () => {
  const [postView, setPostView] = useState([]);
  const threadId = useParams();

  useEffect(() => {
    fetch('http://10.58.52.215:8000/detailsView', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: threadId.postid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostView(data.message[0]);
      });
  }, [threadId]);

  return (
    <div className="PostView">
      <div className="post-container">
        <Post
          key={postView.id}
          postId={postView.id}
          nickname={postView.nickname}
          profileImage={postView.profile_image}
          content={postView.content}
          created_at={postView.created_at}
        />
      </div>
      <div className="comment-container">
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default PostView;
