import './App.css';

import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="App">
            <PersonCard firstName="Jane" lastName="Doe" age= { 45 } hairColor= "Black" />
            <PersonCard firstName="John" lastName="Smith" age= { 88 } hairColor= "Brown" />
            <PersonCard firstName="Millard" lastName="Fillmore" age= { 50 } hairColor= "Grey" />
            <PersonCard firstName="Smith" lastName="Maria" age= { 62 } hairColor= "Red" />        
        </div>
    );
}

export default App;
