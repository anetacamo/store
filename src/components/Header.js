import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/anetacamo_black.png";
import "../main.scss";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentuser }) => {
  return (
    <div className="bg-gray">
      <div className="menu">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="menu-links">
          {currentuser ? (
            <h3>
              Hey <span className="pink bold">{currentuser.displayName}</span>
            </h3>
          ) : null}
          <Link to="/shop">
            <h3>Shop</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
          {currentuser ? (
            <h3 onClick={() => auth.signOut()}>Sign Out</h3>
          ) : (
            <Link to="/signin">
              <h3>Sign In</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
