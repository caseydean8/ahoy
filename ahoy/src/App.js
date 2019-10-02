import React from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import ShipCard from './components/ShipCard'
import ships from './ships.json';

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Wrapper />
      <ShipCard 
      image={ships[0].image}
      />
      <ShipCard 
      image={ships[1].image}
      />
    </div>
  )
}

export default App;