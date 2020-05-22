import React from "react";
import "../../main.scss";

import coffee from "../../images/anetacamo_people.png";

const About = () => {
  return (
    <div style={{ maxWidth: 500 }}>
      <h2>About this fake store</h2>
      <p>
        I have been building this store from scratch as a excercise to get more
        used to some React features. It is filled up with random placeholders
        for now although one day I would love to use it for some products of
        mine. <br />
        <br /> To build this I have been semi-following a tutorial on Udemy.com.
        The data and images that are used to populate the store are provided by
        the{" "}
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
        For navigation I used <b>react-router-dom</b>.<br />I also implemented{" "}
        <b>Redux</b> for some of the features. <br />
        For some other state-like instances I used <b>React Hooks</b>.
        <br />
        <br />I implemented <b>Firebase</b> for storing data about users (just
        the display name of choice and e-mail at the moment. I will not
        distribute or save any of the data entered, although I would encourage
        everyone not to use any personal data as this is only a little
        playground for my front-end developer skills) and their cart. Cart items
        only have limited amount in stock
        <br />
        <br />
        For cascading stylesheets I have been using <b>sass</b> <br />
        <br />
        For payment I used <b>Stripe</b>. It is implemented at the checkout
        page, it works but only as a test version so none real payments can be
        performed. <br />
        <br />
        This project has been continuously published to{" "}
        <b>
          <a
            href="https://github.com/anetacamo/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            this github repo.
          </a>
        </b>
      </p>
      <p>
        For deplyment I am using <b>Heroku</b> where the project is run as can
        be seen in the browser.
        <br />
        <br />
        <b>
          It is still in the building process. I am continuously updating it and
          there is still a lot of work to be done so please excuse the typos,
          bugs and weird messages and designs :).
        </b>
      </p>
      <img src={coffee} alt="logo" style={{ maxWidth: 120 }} />
    </div>
  );
};

export default About;
