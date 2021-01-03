import React, { useState } from 'react';
import './App.css';

import UserForm from './components/UserForm';
import FormData from './components/FormData';

function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <div className="App">
            <UserForm input={state} setInput={setState} />
            <FormData data={state} />
        </div>
    );
}

export default App;
