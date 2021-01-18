import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';

const DeleteButton = props => {

    const { playerId, successCallback } = props;
    
    const deletePlayer = () => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
            .then(res => {
                successCallback(playerId);
                navigate('/');
            })
    }

    return (
        <button
            onClick={deletePlayer}
        >
            Delete
        </button>
    )
}

export default DeleteButton;