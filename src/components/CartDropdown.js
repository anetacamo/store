import React from "react";
import "../main.scss";
import { withRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { compose } from "redux";
import { connect } from "react-redux";
import { setCartOpen } from "../redux/cart/cart.actions";
import CartItem from "./CartItem";

const CartDropdown = ({ cartItems, setCartOpen, history }) => {
  return (
    <div className="cart">
      <div className="close-button" onClick={setCartOpen}>
        <FaTimes />
      </div>
      {cartItems.length === 0 ? (
        <div className="bg-white container">
          <div className="center">
            <h4 className="pink">No items here</h4>
            <p>
              Looks like your cart is completely empty and its okay. nothing
              personal, I know.
            </p>
          </div>
        </div>
      ) : null}
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      {cartItems.length ? (
        <button
          className="button-black"
          onClick={() => history.push(`/checkout`)}
        >
          Go to Checkout
        </button>
      ) : (
        <button className="button-black" onClick={() => history.push(`/shop`)}>
          Shop Now
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCartOpen: () => dispatch(setCartOpen()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);
