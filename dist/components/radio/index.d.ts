import React from "react";
interface RadioOption {
    value: string;
    label: string;
}
type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    options: RadioOption[];
};
export declare const Radio: ({ options, value, onChange, className }: RadioProps) => React.JSX.Element;
export default Radio;
