import React from "react";
import "./style.css";

function ShipContainer(props) {
  return (
    <div className="wrapper">
      {props.image.map((ship, i) => {
        return (
          <div className="image-holder" key={i}>
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

export default ShipContainer;
