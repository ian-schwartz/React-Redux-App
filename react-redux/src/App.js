import React from 'react';
import NbaPlayers from './components/NbaPlayers';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Former and Current NBA Players</h1>
     <p>Data Provided by: balldontlie API</p>
     <NbaPlayers />
    </div>
  );
}

export default App;
