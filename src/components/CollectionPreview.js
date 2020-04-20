import React from "react";
import "../main.scss";

const CollectionPreview = ({ title, items, onItemAdd }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="directory-menu">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id} className="menu-item">
              <img
                src={item.imageUrl}
                className="image-container contain"
                alt="a gallery item very nice"
              />
              <h3>{item.name}</h3>
              <h3 className="pink">{item.price}$</h3>
              <button onClick={() => onItemAdd(item)}>Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
