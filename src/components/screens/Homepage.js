import React from "react";
import "../../main.scss";

import Banner from "../Banner";
import Tags from "../Tags";
import Categories from "../Categories";

const Homepage = ({ collections }) => {
  return (
    <div>
      <Banner pageName="Welcome" />
      <Tags collections={collections} />
      <Categories collections={collections} />
    </div>
  );
};

export default Homepage;
