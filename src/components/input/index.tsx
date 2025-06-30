import React from 'react';

export const Input = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

Input.displayName = 'Input';

export default Input;