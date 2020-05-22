import React from "react";
import "../../main.scss";

import CollectionPreview from "../CollectionPreview";
import Collection from "../Collection";
import SinglePage from "../SinglePage";
import Categories from "../Categories";

import { Switch, Route } from "react-router-dom";
import WithSpinner from "../WithSpinner";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionWithSpinner = WithSpinner(Collection);
const CategoriesWithSpinner = WithSpinner(Categories);

// here we have access to match object because Shop is defined in tge Route object. that means, is automatically assigned with match, location, history as props
const Shop = ({ collections, match, isLoading }) => {
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
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId/:itemId`}
          render={(props) => (
            <SinglePage {...props} collections={collections} />
          )}
        />
        <Route
          path={match.path}
          render={() => <h1 className="center">SHOP</h1>}
        />
      </Switch>
      <CategoriesWithSpinner collections={collections} isLoading={isLoading} />
      <CollectionPreviewWithSpinner
        isLoading={isLoading}
        collections={collections}
      />
    </div>
  );
};

export default Shop;
