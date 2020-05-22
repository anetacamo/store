import React from "react";
import "../main.scss";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div className="menu-item center singular" key={id}>
      <Link to={`/shop/all/${id}`}>
        <img
          src={imageUrl}
          alt="man in coffee"
          className="image-container contain bg-gray"
        />
        <FaHeart />
        <h3>{name}</h3>
        <h3 className="blue">${price}</h3>
        <div className="tag" onClick={() => addItem(item)}>
          Add to cart
        </div>
      </Link>
    </div>
  );
};

const mapDispachToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispachToProps)(CollectionItem);
