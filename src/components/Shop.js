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
        <h1>Shop Page</h1>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview
            key={id}
            {...otherProps}
            onItemAdd={this.props.onItemAdd.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
