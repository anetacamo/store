import React from "react";
import "../main.scss";
import { FaShoppingCart } from "react-icons/fa";

import { connect } from "react-redux";
import { setCartOpen } from "../redux/cart/cart.actions";

const ShopIcon = ({ setCartOpen, itemsTotalPrice }) => {
  return (
    <div onClick={setCartOpen}>
      <div className="relative">
        <FaShoppingCart className="shop-icon" />
      </div>
      <li style={{ padding: "0px 8px" }}>{itemsTotalPrice}</li>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCartOpen: () => dispatch(setCartOpen()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemsTotalPrice: cartItems.reduce(
    (totalCartItems, cartItem) => totalCartItems + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopIcon);
