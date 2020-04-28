import React from "react";
import "../../main.scss";

import coffee from "../../images/gloveslogo.png";
import cactus from "../../images/plant-enge.png";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <img src={coffee} alt="logo" />
      <img src={cactus} alt="logo" />
    </div>
  );
};

export default About;
