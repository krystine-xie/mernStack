import React, { useState } from 'react';

const AddPlayerForm = props => {

    const { createPlayer, errors } = props;

    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");

    const onSubmitHandle = (e) => {
        e.preventDefault();
        createPlayer({name: playerName, position: playerPosition});
        console.log(playerName, playerPosition)
    }

    return (
        <div style={{border: "1px solid black", width: "400px", margin: "20px auto", padding: "10px"}}>
            {errors.map((err, idx) => <p style={{ color: '#8F0C25', fontWeight: "700" }} key={idx}>{err}</p>)}
            
            <form onSubmit={(e) => onSubmitHandle(e)}>
                <p>
                    <label>Player Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </p>
                <p>
                    <label>Player Position: </label>
                    <input
                        type="text"
                        name="position"
                        value={playerPosition}
                        onChange={(e) => setPlayerPosition(e.target.value)}
                    />
                </p>
                <input
                    type="submit" 
                    value="Add Player"
                    disabled={!(playerName.length >= 2)}
                />
                </form>
        </div>
    )

}

export default AddPlayerForm;