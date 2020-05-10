import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../images/anetacamo_white.png";
import ShopIcon from "../components/ShopIcon";
import CartDropdown from "../components/CartDropdown";

import "../main.scss";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser, cartItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="menu">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="menu-links">
          {currentUser ? (
            <li>
              Hey <span className="pink bold">{currentUser.displayName}</span>
            </li>
          ) : null}
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
            <li onClick={() => auth.signOut()}>Sign Out</li>
          ) : (
            <Link to="/signin">
              <li>Sign In</li>
            </Link>
          )}
          <ShopIcon
            cartItems={cartItems}
            toggleCartHidden={() => setOpen((open) => !open)}
          />
        </div>
        {open ? (
          <CartDropdown
            cartItems={cartItems}
            toggleCartHidden={() => setOpen((open) => !open)}
          />
        ) : null}
      </div>
    </div>
  );
};

// state is a root reducer here. The top level root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
