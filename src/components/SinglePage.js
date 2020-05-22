import React from "react";
import "../main.scss";

import { addItem } from "../redux/cart/cart.actions";
import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";

const SinglePage = ({ match, collections, addItem }) => {
  const itemid = match.params.itemId;
  const itemArray = collections.map((c) => c.items.find((i) => i.id == itemid));
  const item = itemArray.find((i) => i != undefined);

  return (
    <div className="padding-vert">
      <div className="menu-item-parent singular">
        {item ? (
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
              <h2>
                {item.name} <span className="blue">${item.price}</span>
              </h2>
              <div
                className="tag added"
                style={{ position: "static", marginBottom: 24, marginTop: 4 }}
                onClick={() => addItem(item)}
              >
                Add to cart
              </div>
              <FaHeart style={{ top: 60, right: 32 }} />
            </div>{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SinglePage);
