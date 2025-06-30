import React from "react";

// TODO add tests
export const Textarea = ({ value, onChange, className, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
