import React from "react";
import "../main.scss";

import cactus from "../images/soc.jpg";
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
          className="menu-item singular flex"
          style={{ maxWidth: 648 }}
        >
          <div>
            <img
              src={cactus}
              alt="man in coffee"
              style={{ width: 300, height: 400 }}
              className="image-container contain bg-gray"
            />
          </div>
          <div className="padding">
            <p>face-masks</p>
            <h3>
              {item.name} <span className="blue">${item.price}</span>
            </h3>
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
