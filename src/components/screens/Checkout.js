import React from "react";
import "../../main.scss";
import { withRouter } from "react-router-dom";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StripeButton from "../StripeButton";
import { addItem, removeItem, deleteItem } from "../../redux/cart/cart.actions";
import { compose } from "redux";
import { connect } from "react-redux";

const Checkout = ({
  cartItems,
  history,
  addItem,
  removeItem,
  deleteItem,
  itemsTotalPrice,
}) => {
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
          <div class="close-button" onClick={() => deleteItem(item)}>
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
            <div>
              <h4>
                Quantity: <span className="pink">{item.quantity}</span>
                <span className="right">${item.quantity * item.price}</span>
              </h4>
            </div>
            <div>
              <FaAngleLeft
                className="plus-minus plus"
                onClick={() => removeItem(item)}
              />
              <FaAngleRight
                className="plus-minus minus"
                onClick={() => addItem(item)}
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
          <StripeButton price={itemsTotalPrice} />
        </div>
      ) : null}
      <button onClick={() => history.push(`/shop`)}>Keep Shopping</button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemsTotalPrice: cartItems.reduce(
    (totalCartItems, cartItem) =>
      totalCartItems + cartItem.quantity * cartItem.price,
    0
  ),
  cartItems: cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Checkout);
