import React from "react";
import "../main.scss";
import logo from "../images/anetacamo_people.png";
import { FaHeart, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollectionPreview = ({ collections, onItemAdd }) => {
  return (
    <div className="center padding-vert">
      <h1 className="center">Newest Items</h1>
      {Object.keys(collections).map((item, id) => (
        <div className="center padding-vert" key={collections[item].id}>
          <h2 className="purple padding-vert">
            <Link to={`/shop/${collections[item].routeName}`}>
              <FaHandPointRight /> {collections[item].title} <FaHandPointLeft />
            </Link>
          </h2>
          <div className="menu-item-parent singular">
            {collections[item].items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <div className="menu-item center singular" key={item.id}>
                  <Link to={`/shop/all/${item.id}`}>
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
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPreview;
