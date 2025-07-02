import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelClassName?: string;
};

export const Checkbox = ({
  labelClassName = "",
  label,
  ...props
}: CheckboxProps) => {
  return (
    <label className={labelClassName}>
      <input type="checkbox" {...props}/>
      {label}
    </label>
  );
};

export default Checkbox;
