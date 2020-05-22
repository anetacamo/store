import React from "react";
import "../main.scss";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-cont">
      <Link to={`/shop/all/${id}`}>
        <div className="flex">
          <img className="icon-image" alt="man in coffee" src={imageUrl} />
          <div className="container-desc">
            <FaHeart />
            <h4 className="pink">{name}</h4>
            <h4>
              {quantity ? quantity : "1"} x {price}$
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartItem;
