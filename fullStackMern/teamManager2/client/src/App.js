import './App.css';
import React from 'react';
import { Router, Redirect }from '@reach/router';

import HomePage from './views/HomePage';
import AddPlayerPage from './views/AddPlayerPage';
import PlayerStatusPage from './views/PlayerStatusPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect noThrow from="/" to="players/list" />
        <HomePage path="/players/list" />
        <AddPlayerPage path="/players/addplayer" />
        <PlayerStatusPage path="/status/game/:num" />
      </Router>
    </div>
  );
}

export default App;
