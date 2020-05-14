import React from "react";
import "../main.scss";

import coffee from "../images/birthdaysurprise.jpg";

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

// when use find we pass this function on EVERY element
// data normalisation: storing lists of elements inside of an object instead of an array

const Collection = ({ match, collections, onItemAdd }) => {
  const collectionName = match.params.collectionId;
  const collection = collections.find((c) => c.routeName === collectionName);

  let collectionList = [];
  let result = (
    <span>
      <img src={coffee} alt="man in coffee" className="contain image-m" />
      <h1 className="padding-vert">Oh Oh. Page not found</h1>
    </span>
  );
  if (collection) {
    result = (
      <h1 className="padding-vert">All of our {collectionName} for you</h1>
    );
    collectionList = collection.items;
  }

  return (
    <div className="center padding-vert">
      {result}
      <div className="menu-item-parent singular">
        {collectionList.map((item) => (
          <Link to={`/shop/all/${item.id}`}>
            <div key={item.id} className="menu-item center singular">
              <img
                src={item.imageUrl}
                alt="man in coffee"
                className="image-container contain bg-gray"
              />
              <FaHeart />
              <h3>{item.name}</h3>
              <h3 className="blue">${item.price}</h3>
              <div className="tag" onClick={() => onItemAdd(item)}>
                Add to cart
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
