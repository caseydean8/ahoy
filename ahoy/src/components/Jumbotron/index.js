import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1>React Ahoy!</h1>
      <h4>Tap a ship to play</h4>
      <h4>Don't tap the same ship twice</h4>
      <div className="row scores">
        <div className="col-sm-6">
          <h3>Score: {props.score}</h3>
        </div>
        <div className="col-sm-6">
          <h3>High Score: {props.highScore}</h3>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
