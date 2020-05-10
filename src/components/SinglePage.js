import React from "react";
import "../main.scss";

import { FaHeart } from "react-icons/fa";

const SinglePage = ({ match, collections, onItemAdd }) => {
  const itemid = match.params.itemId;
  const itemArray = collections.map((c) => c.items.find((i) => i.id == itemid));
  const item = itemArray.find((i) => i != undefined);

  return (
    <div className="padding-vert">
      <div className="menu-item-parent singular">
        <div
          key={item.id}
          className="menu-item singular flex-wrap"
          style={{ maxWidth: 720 }}
        >
          <div>
            <img
              src={item.imageUrl}
              alt="man in coffee"
              style={{ maxWidth: 320, height: 460 }}
              className="image-container contain bg-gray"
            />
          </div>
          <div className="padding" style={{ maxWidth: 352 }}>
            <p>face-masks</p>
            <h2>
              {item.name} <span className="blue">${item.price}</span>
            </h2>
            <div
              className="tag added"
              style={{ position: "static", marginBottom: 24, marginTop: 4 }}
              onClick={() => onItemAdd(item)}
            >
              Add to cart
            </div>
            <FaHeart style={{ top: 60, right: 32 }} />
            <div className="flex">
              <button className="item-btn open">Material</button>
              <button className="button-gray item-btn">Delivery</button>
              <button className="button-gray item-btn">Care</button>
            </div>
            <p>
              This material is made out of 96% cotton. The gums are used to fit
              it well behind the ears
            </p>
            <p>
              shipped to your address or message me for some alternative
              solutions!
            </p>
            <p>
              it will survive the boiling water easily. Those are better of kept
              out of the boiling water but they survive several boils too!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
