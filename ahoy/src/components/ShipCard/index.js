import React from "react";
// import "./style.css";

function ShipCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="ship" src={props.image} />
      </div>
    </div>
  );
}

export default ShipCard;