import React from "react";
import "../../main.scss";

import coffee from "../../images/anetacamo_people.png";

const About = () => {
  return (
    <div style={{ maxWidth: 500 }}>
      <h2>About this fake store</h2>
      <p>
        I build this store as a excercise to get more used to some React
        features. It is filled up with random placeholders for now. I was
        semi-following a tutorial on Udemy.com and the images I have downloaded
        from the data to populate the store with items they have provided in the{" "}
        <b>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery"
          >
            course{" "}
          </a>
        </b>
        <br />
        <br />
        For navigation I used <b>react-router-dom</b>.
        <br />
        <br />I implemented <b>Firebase</b> for storing data about users and
        their cart. Cart items only have limited amount in stock
        <br />
        <br />
        For cascading stylesheets I have been using sass <br />
        <br />
        For payment I used <b>Stripe</b>. It is implemented at the checkout
        page, it works but only as a test version so none real payments can be
        performed. <br />
        <br />
        This project have been continuously published to{" "}
        <b>
          <a href="https://github.com/anetacamo/store" target="_blank">
            this github repo.
          </a>
        </b>
      </p>
      <p>
        For deplyment I am using <b>Heroku</b> where the project is run as you
        can see in the browser.
        <br />
        <br />
        <b>There is still a lot of work to be done.</b>
      </p>
      <img src={coffee} alt="logo" style={{ maxWidth: 120 }} />
    </div>
  );
};

export default About;
