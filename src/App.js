import React from 'react';
import Pokedex from './pokedex/Pokedex';
import pokemon from './data/pokemon';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
