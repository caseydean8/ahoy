import React from "react";
// import "./style.css";

function ShipCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {props.image.map((ship, i) => {
          return (
            <img 
              src={ship.image}
              alt="ship" 
              key={i}
              onClick={() => props.shipClick(ship.id)} />
          )
          })
        }
      </div>
    </div>
  );
}

export default ShipCard;