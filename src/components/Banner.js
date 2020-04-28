import React from "react";
import "../main.scss";
import logo from "../images/anetacamo_people.png";

const Banner = ({ pageName }) => {
  return (
    <div>
      <h1 className="center large">{pageName}</h1>
      <div className="container bg-gray flex-between">
        <div></div>
        <img src={logo} alt="mylogo" className="image-m center" />
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
