import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

import './PostView.scss';

const PostView = () => {
  const [postView, setPostView] = useState([]);
  const threadId = useParams();

  // http://10.58.52.215:8000/detailsView
  useEffect(() => {
    fetch(`/data/postList.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      // body: JSON.stringify({
      //   id: threadId.postid,
      // }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostView(data.message[0]);
      });
  }, []);

  if (postView.length <= 0) {
    return null;
  }

  return (
    <div className="postView">
      <div className="container">
        <div className="postContainer">
          <Post
            key={postView.id}
            postId={postView.id}
            nickname={postView.nickname}
            profileImage={postView.profile_image}
            content={postView.content}
            created_at={postView.created_at}
          />
        </div>
        <div className="commentContainer">
          {postView.comments.map((comment, index) => (
            <Comments
              key={index}
              nickname={comment.nickname}
              profileImage={comment.profile_image}
              comment={comment.comment}
              createdAt={comment.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostView;
