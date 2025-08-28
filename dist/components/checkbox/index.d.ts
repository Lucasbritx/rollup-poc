import React from "react";
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    labelClassName?: string;
};
export declare const Checkbox: ({ labelClassName, label, ...props }: CheckboxProps) => React.JSX.Element;
export default Checkbox;
