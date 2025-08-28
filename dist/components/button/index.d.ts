import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};
export declare const Button: ({ title, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
