import React from "react";
import "../main.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="directory-menu">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.imageUrl} className="image-container contain" />
              <h3>{item.name}</h3>
              <h3 className="pink">{item.price}$</h3>
              <button>Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
