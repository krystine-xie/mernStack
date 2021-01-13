import React from 'react'; 
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Detail path="people/:id" />
        <Update path="people/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
