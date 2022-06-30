import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import ShipContainer from "./components/ShipContainer";
import ships from "./ships.json";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(ships);

class App extends Component {
  state = {
    image: ships,
    clicked: [],
    score: 0,
    highScore: 0,
  };

  shipClick = (shipId) => {
    if (this.state.clicked.includes(shipId)) {
      this.setBanner("GAME OVER!");
      if (this.state.score > this.state.highScore)
        this.setState({ highScore: this.state.score });
      this.setState({ clicked: [], score: 0 });
    } else {
      shuffle(ships);
      this.incrementScore();
      this.setBanner("");
      this.state.clicked.push(shipId);
    }
  };

  setBanner = (banner) => {
    this.setState({ banner });
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div className="container">
        <Jumbotron
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <ShipContainer shipClick={this.shipClick} image={this.state.image} />
      </div>
    );
  }
}

export default App;
