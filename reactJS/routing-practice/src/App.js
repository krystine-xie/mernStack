import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import NumberOrWord from './components/NumberOrWord';
import Home from './components/Home';
import Colour from './components/Colour';

function App() {
  return (
    <div className="App">
      <Router>
        <NumberOrWord path="/:id" />
        <Home path="/home" />
        <Colour path="/:word/:textColour/:bgColour" />
      </Router>
    </div>
  );
}

export default App;
