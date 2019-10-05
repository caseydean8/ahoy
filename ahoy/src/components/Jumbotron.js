import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1>Ahoy</h1>
      <div className="row">
        <div className="column">
        <h3>{ props.banner }</h3>
        </div>
        <div className="column">
        <h3>{ props.score }</h3>
        </div>
        <div className="column">
        <h3>{ props.highScore }</h3>
        </div>
      </div>

    </div>
  );
}

export default Jumbotron;