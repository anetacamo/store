import React from "react";
import "../../main.scss";

import coffee from "../../images/anetacamo_people.png";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        I have built this small store just to get better at working with react.
        It is filled up with random placeholders for now, although one day I
        would love to use it for selling some of my products.
        <br />
        <br />
        For navigation I used react-router-dom.
        <br />
        <br />I implemented Firebase for storing data about users and their cart
        items that are updating live. Cart items only have limited amount in
        stock so they update live as some of them might be bought. <br />
        <br />
        For payment I used a Stripe payment. It is implemented at the checkout
        page, it works but only as a test version so none real payments can be
        performed. <br />
        <br />
        This project might have been pretty suitable for Redux implementation
        but I decided to skip it for now as I really wanted focus on react
        itself and its features.
      </p>
      <img src={coffee} alt="logo" style={{ maxWidth: 120 }} />
    </div>
  );
};

export default About;
