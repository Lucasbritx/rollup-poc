import React from "react";

// TODO add tests
export const Button = ({ title, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
