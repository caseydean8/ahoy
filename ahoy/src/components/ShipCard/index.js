import React from "react";
import "./style.css";

function ShipCard(props) {
  return (
    <div className="wrapper">
      {props.image.map((ship, i) => {
        return (
          <div className="image-holder">
            <img
              className="ship-img"
              src={ship.image}
              alt="ship"
              key={i}
              onClick={() => {
                props.shipClick(ship.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ShipCard;
