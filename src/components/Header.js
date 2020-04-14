import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/anetacamo_black.png";
import "../main.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="menu-links">
          <Link to="/shop">
            <h3>Shop</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
