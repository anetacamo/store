import React from "react";
import "../main.scss";

const Input = ({ name, onChange, value, type, label }) => {
  return (
    <div>
      <label>{label ? label : name}</label>
      <input
        name={name}
        type={type ? type : name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
