import React from "react";
import "../main.scss";
import { FaShoppingCart } from "react-icons/fa";

//import { connect } from "react-redux";
//import { toggleCartHidden } from "./cart.actions.js";

//const ShopIcon = ({ toggleCartHidden }) => {
const ShopIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div onClick={toggleCartHidden}>
      <div className="relative">
        <FaShoppingCart className="shop-icon" />
      </div>
      <li style={{ padding: "0px 8px" }}>
        {cartItems.reduce(
          (totalCartItems, cartItem) => totalCartItems + cartItem.quantity,
          0
        )}
      </li>
    </div>
  );
};

//constMapDispatchToProps = (dispatch) => ({
//  toggleCartHidden: () => dispatch(toggleCartHidden()),
//});

export default ShopIcon;
// export default connect(null, mapDispatchToProps)(ShopIcon);
