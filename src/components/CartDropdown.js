import React from "react";
import "../main.scss";
import { withRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <div className="cart">
      <div className="close-button" onClick={toggleCartHidden}>
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
        <div className="cart-cont" key={item.id}>
          <div className="flex">
            <img
              className="icon-image"
              alt="man in coffee"
              src={item.imageUrl}
            />
            <div className="container-desc">
              <h4 class="pink">{item.name}</h4>
              <h4>
                {item.quantity ? item.quantity : "1"} x {item.price}$
              </h4>
            </div>
          </div>
        </div>
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

export default withRouter(CartDropdown);
