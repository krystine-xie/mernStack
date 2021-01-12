import React from 'react'; 
import Main from './views/Main';
import Detail from './views/Detail';

import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Detail path="people/:id" />
      </Router>
      
    </div>
  );
}

export default App;
