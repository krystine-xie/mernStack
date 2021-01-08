import React, { useState } from 'react';
import Tabs from './components/Tabs.js';
import Display from './components/Display';
import './App.css';

function App() {
    let listOfTabs = [
        { 
            label: "Tab 1", 
            content: "Tab 1 content here!" 
        },
        {
            label: "Tab 2",
            content: "Tab 2 stuff here!"
        },
        {
            label: "Tab 3",
            content: "Tab 3 material here!"  
        }
    ];

    const [content, setContent] = useState("Click on a tab to display its content!");

    const toDisplay = ( value ) => {
        setContent(value); 
    }

    return (
        <div className="App">
            <Tabs items={listOfTabs} onDisplay={toDisplay} />
            <Display display={content} />
        </div>
    );
}

export default App;
