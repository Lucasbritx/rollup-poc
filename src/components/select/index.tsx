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

export const Select = ({ options, value, onChange, className }: SelectProps) => {
  return (
    <select
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;