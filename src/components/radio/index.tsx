import React from 'react';

// TODO add tests
export const Radio = ({ options, value, onChange, className }) => {
    return (
        <div className={className}>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={value === option.value}
                        onChange={() => onChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default Radio;