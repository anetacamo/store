import React from "react";
import "../main.scss";
import CollectionItem from "../components/CollectionItem";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollectionPreview = ({ collections }) => {
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
                <CollectionItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPreview;
