import React from "react";
import "../main.scss";
import Directory from "../components/Directory";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="directory-menu">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id} className="preview menu-item">
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              ></div>
              <h3>{item.name}</h3>
              <h2>{item.price}$</h2>
              <button>Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
