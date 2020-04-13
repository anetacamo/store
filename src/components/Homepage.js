import React from "react";
import "../main.scss";
import Directory from "../components/Directory";

const Homepage = ({ history }) => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="logo">
          <img src="" />
        </div>
      </div>
      <Directory />
    </div>
  );
};

export default Homepage;
