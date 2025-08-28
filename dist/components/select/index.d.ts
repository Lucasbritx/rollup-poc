import React from 'react';
interface SelectOption {
    value: string;
    label: string;
}
type SelectProps = {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};
export declare const Select: ({ options, value, onChange, className }: SelectProps) => React.JSX.Element;
export default Select;
