import React from "react";
import "../main.scss";
import Directory from "../components/Directory";

const Input = ({ title, onChange, value }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        name={title}
        type={title}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
