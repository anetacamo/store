import React from "react";
import "../main.scss";
import { withRouter } from "react-router-dom";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StripeButton from "./StripeButton";

const Checkout = ({
  cartItems,
  history,
  onItemDelete,
  onItemRemove,
  onItemAdd,
}) => {
  const itemsTotalPrice = cartItems.reduce(
    (totalCartItems, cartItem) =>
      totalCartItems + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div style={{ maxWidth: 580 }}>
      <h1>Your shopping bag items</h1>
      {cartItems.length === 0 ? (
        <div>
          <h2 class="pink">No items here</h2>
          <p>
            Looks like your cart is completely empty and its okay. nothing
            personal, I know.
          </p>
        </div>
      ) : null}
      {cartItems.map((item) => (
        <div className="flex relative">
          <div class="close-button" onClick={() => onItemDelete(item)}>
            <FaTimes />
          </div>
          <img
            className="checkout-icon cover"
            alt="anetacamo my own logo"
            src={item.imageUrl}
          />
          <div className="container-desc">
            <h4>
              {item.name} | <span className="pink">${item.price}</span>
            </h4>
            <p>
              an optional pretty short desc of the item.
              <br />I dont even know if its enough space, we'll see. its
              optional, tho.
            </p>
            <div>
              <h4>
                Quantity: <span className="pink">{item.quantity}</span>
                <span className="right">${item.quantity * item.price}</span>
              </h4>
            </div>
            <div>
              <FaAngleLeft
                className="plus-minus plus"
                onClick={() => onItemRemove(item)}
              />
              <FaAngleRight
                className="plus-minus minus"
                onClick={() => onItemAdd(item)}
              />
            </div>
          </div>
        </div>
      ))}
      {cartItems.length ? (
        <div>
          <div className="flex-between">
            <h2>Total</h2>
            <h2>${itemsTotalPrice}</h2>
          </div>
          <button>Go to Checkout</button>
          <StripeButton price={itemsTotalPrice} />
        </div>
      ) : null}
      <button onClick={() => history.push(`/shop`)}>Keep Shopping</button>
    </div>
  );
};

export default withRouter(Checkout);
