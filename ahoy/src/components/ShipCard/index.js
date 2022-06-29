import React from "react";
import "./style.css";

function ShipCard(props) {
  return (
    <div className="wrapper">
      {props.image.map((ship, i) => {
        return (
          <div className="image-holder">
            <div
              className="ship-img"
              alt="ship"
              style={{ backgroundImage: `url(${ship.image})` }}
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
