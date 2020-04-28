import React from "react";
import "../main.scss";
import { Link } from "react-router-dom";
import cactus from "../images/cactuses.png";

const Categories = ({ collections }) => {
  return (
    <div className="center padding-vert">
      <h1 className="padding-vert">Categories</h1>
      <div className="menu-item-parent">
        {collections.map((c) => (
          <Link to={`/shop/${c.routeName}`} key={c.id}>
            <div className="menu-item center singular">
              <img
                src={cactus}
                alt="two people who like to grow plants"
                className="contain"
              />
              <div>
                <h3>shop {c.title}</h3>
                <h3 className="pink">{c.items.length} items</h3>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
