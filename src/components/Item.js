import React from "react";
import "../main.scss";
import { withRouter } from "react-router-dom";

// withRouter is a higher order component
// a higher order component is a fc that takes anuy cmp and modifies it in some way and then returns you a modified//powered cmp
const Item = ({ title, image, size, history, match }) => {
  return (
    // url with string-interaplated value. this allows us to dynamically make styles on our components
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${title}`)}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="content">
        <h2>{title}</h2>
        <h3>Shop now</h3>
      </div>
    </div>
  );
};

export default withRouter(Item);
