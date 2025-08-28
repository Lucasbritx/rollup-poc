import React from "react";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
export declare const Input: ({ label, ...props }: InputProps) => React.JSX.Element;
export default Input;
