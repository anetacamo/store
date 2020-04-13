import React from "react";
import "../main.scss";

const Item = ({ title, image, size }) => {
  return (
    // url with string-interaplated value. this allows us to dynamically make styles on our components
    <div
      className={`menu-item ${size}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="content">
        <h2>{title}</h2>
        <h3>Shop now</h3>
      </div>
    </div>
  );
};

export default Item;
