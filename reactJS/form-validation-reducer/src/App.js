import './App.css';
import React, { useState, useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },

    lastName: {
        value: '',
        error: null
    },

    email: {
        value: '',
        error: null
    }
}

const ACTIONS = {

}

function reducer(state, action) {

};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>First Name:</label>
                    <input type="text" name="firstName" />
                </div>
                <div className="inputGroup">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" />
                </div>
                <div className="inputGroup">
                    <label>Email:</label>
                    <input type="text" name="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
