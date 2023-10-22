import React from 'react';
import './Textarea.scss';

const Textarea = ({ placeholder, maxLength, content, setTextValue }) => {
  return (
    <div className="textarea">
      <textarea
        className="content"
        onChange={(e) => setTextValue(e.target.value)}
        value={content}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Textarea;
