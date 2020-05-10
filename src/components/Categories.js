import React from "react";
import "../main.scss";
import { Link } from "react-router-dom";

const Categories = ({ collections }) => {
  return (
    <div className="center padding-vert">
      <h1 className="padding-vert">Categories</h1>
      <div className="menu-item-parent">
        {collections.map((c) => (
          <div className="menu-item center singular" key={c.id}>
            <Link to={`/shop/${c.routeName}`}>
              <img
                src={c.items[0].imageUrl}
                alt={c.title}
                className="contain"
              />
              <div>
                <h3>shop {c.title}</h3>
                <h3 className="pink">{c.items.length} items</h3>
              </div>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
