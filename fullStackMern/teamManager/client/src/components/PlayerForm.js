import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const PlayerForm = props => {
    
    const { players, setPlayers } = props;

    const [playerName, setPlayerName] = useState('');
    const [playerPosition, setPlayerPosition] = useState('');
    const [errors, setErrors] = useState([]);

    const createPlayer = (newPlayer) => {
        axios.post('http://localhost:8000/api/players', newPlayer)
            .then(res => {
                console.log(res.data);
                setPlayers([...players, res.data]);
                navigate('/');
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message);
                }
                setErrors(errArr);
            })
    }

    return (
        <div>
            <h1>Add Player</h1>
            <form onSubmit={createPlayer}>
                <p>
                    <label>Player Name: </label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </p>
                <p>
                    <label>Player Position: </label>
                    <input
                        type="text"
                        value={playerPosition}
                        onChange={(e) => setPlayerPosition(e.target.value)}
                    />
                </p>
                <input
                    type="submit" 
                    value="Add"
                />
            </form>
        </div>
    )

}

export default PlayerForm;