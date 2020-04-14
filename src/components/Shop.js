import React from "react";
import "../main.scss";
import SHOP_DATA from "../shopdata.js";
import CollectionPreview from "../components/CollectionPreview";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        <h2>Shop Page</h2>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
