import React from 'react';
import './Input.scss';

const Input = ({ type, placeholder, id, value, onChange, required }) => {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
