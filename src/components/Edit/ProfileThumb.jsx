import React from 'react';
import './profileThumb.scss';

const ProfileThumb = ({ src, name }) => {
  return (
    <div className="profileThumb">
      <img className={`profile${name}`} src={src} alt="프로필" />
    </div>
  );
};

export default ProfileThumb;
