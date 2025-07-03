import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
};

export default Input;
