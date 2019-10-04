import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import ShipCard from './components/ShipCard'
import ships from './ships.json';
// https://github.com/caseydean8/ahoy repository
// https://caseydean8.github.io/ahoy/  git hub pages

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

shuffle(ships)

class App extends Component {
  state = {
    image: ships,
  };

  shipClick = (shipId) => {
    shuffle(ships)
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Wrapper>
          <ShipCard
          shipClick={this.shipClick}
          image={this.state.image} />
        </Wrapper>
      </div>
    );
  }
}

export default App;

