import React from "react";
import "./Card.css";

const Card = ({ title, children }) => {
  return (
    <div className="container">
      <div className="card">
        <h3>{title}</h3>
        <hr />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
