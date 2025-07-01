import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {title}
    </button>
  );
};

export default Button;
