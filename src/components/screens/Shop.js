import React from "react";
import "../../main.scss";

import CollectionPreview from "../CollectionPreview";
import Collection from "../Collection";
import SinglePage from "../SinglePage";
import Tags from "../Tags";
import Banner from "../Banner";
import Categories from "../Categories";

import { Switch, Route } from "react-router-dom";
import WithSpinner from "../WithSpinner";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionWithSpinner = WithSpinner(Collection);
const CategoriesWithSpinner = WithSpinner(Categories);

// here we have access to match object because Shop is defined in tge Route object. that means, is automatically assigned with match, location, history as props
const Shop = ({ collections, onItemAdd, match, isLoading }) => {
  console.log(isLoading);
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner
              exact
              isLoading={isLoading}
              {...props}
              collections={collections}
              onItemAdd={onItemAdd.bind(this)}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId/:itemId`}
          render={(props) => (
            <SinglePage
              {...props}
              collections={collections}
              onItemAdd={onItemAdd.bind(this)}
            />
          )}
        />
        <Route path={match.path} render={() => <Banner pageName="SHOP" />} />
      </Switch>
      <Tags collections={collections} />
      <CategoriesWithSpinner collections={collections} isLoading={isLoading} />
      <CollectionPreviewWithSpinner
        isLoading={isLoading}
        collections={collections}
        onItemAdd={onItemAdd.bind(this)}
      />
    </div>
  );
};

export default Shop;
