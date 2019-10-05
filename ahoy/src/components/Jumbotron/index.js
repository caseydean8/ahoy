import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1>Ahoy</h1>
      <div className="banner">
        <div>
          <h3>{ props.banner }</h3>
        </div>
      </div>
      <div className="row scores">
        <div className="column score">
          <h3>Score { props.score }</h3>
          </div>
        <div className="column high-score">
          <h3>High Score { props.highScore }</h3>
          </div>
      </div>
    </div>
  );
}

export default Jumbotron;