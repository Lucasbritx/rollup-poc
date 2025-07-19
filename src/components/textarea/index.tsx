import React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ value, onChange, className, placeholder }: TextareaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
