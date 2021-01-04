import './App.css';

import React, { useState } from 'react';

import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
    const [boxes, setBoxes] = useState([]); 

    const newBoxAdded = (newColor, newSize) => {
        let newBox = {
            color: newColor,
            size: newSize
        };

        setBoxes([...boxes, newBox]); 
    }

    return (
        <div className="App">
            <h1>BOX GENERATOR</h1>
            <ColorForm onCreate={ newBoxAdded } />
            <BoxDisplay boxes={boxes} />
        </div>
    );
}

export default App;
