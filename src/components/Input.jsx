/* * */
/* * */
/* * * * * */
/* INPUT FIELD */
/* * */

import React from "react";

const Input = ({
  name,
  label,
  placeholder,
  type,
  autoComplete,
  onChange,
  value,
  error
}) => {
  return (
    <div className="my-3">
      {label && (
        <label htmlFor={name} className="m-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        error={error}
        className={"text-lg form-control " + name}
      />
      {error && (
        <div className="text-danger mt-2" style={{ fontSize: 15 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
