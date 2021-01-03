import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="brown" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="white" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="black" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="grey" />
    </div>
  );
}

export default App;
