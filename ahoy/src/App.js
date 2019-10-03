import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import ShipCard from './components/ShipCard'
import ships from './ships.json';

class App extends Component {
  state = {
    ships
  };


  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Wrapper>
          {this.state.ships.map(ship => (
            <ShipCard 
              image={ship.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

