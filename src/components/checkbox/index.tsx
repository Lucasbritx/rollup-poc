import React from 'react';

// TODO add tests
export const Checkbox = ({ checked, onChange, className, label }) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;