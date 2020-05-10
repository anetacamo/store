import React from "react";
import "../../main.scss";

import Banner from "../Banner";
import Tags from "../Tags";
import Categories from "../Categories";
import WithSpinner from "../WithSpinner";

const Homepage = ({ collections }) => {
  return (
    <div>
      <Banner pageName="Welcome" />
      <WithSpinner />
      <Tags collections={collections} />
      <Categories collections={collections} />
    </div>
  );
};

export default Homepage;
