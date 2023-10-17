import React from 'react';
import Post from './Post';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <div className="post-list">
        <div className="post-container">
          <div className="post">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
