import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  options: RadioOption[];
};

export const Radio = ({ options, value, onChange, className }: RadioProps) => {
  return (
    <div className={className}>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Radio;
