import React from 'react';
import './Button.scss';

const Button = ({ text, type, handleClick, disabled }) => {
  return (
    <div className="button">
      <button onClick={handleClick} className={type} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
