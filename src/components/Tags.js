import React from "react";
import "../main.scss";
import { Link } from "react-router-dom";

const Tags = ({ collections }) => {
  return (
    <div className="container center">
      {collections.map((c) => (
        <Link to={`/shop/${c.routeName}`} key={c.id}>
          <div className="tag">{c.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
