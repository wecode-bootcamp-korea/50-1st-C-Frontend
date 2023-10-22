import ProfileThumb from './ProfileThumb';
import Textarea from './Textarea';
import './write.scss';

import React from 'react';

const Write = ({ profileImage, userName, content, setTextValue }) => {
  return (
    <div className="write">
      <div className="write-container">
        <ProfileThumb src={profileImage} name="image" />

        <div className="userContainer">
          <p className="nickname">{userName}</p>
          <Textarea
            placeholder="스레드를 시작하세요"
            maxLength="150"
            content={content}
            setTextValue={setTextValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Write;
