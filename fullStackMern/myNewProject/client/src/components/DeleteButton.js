import React from 'react'; 
import axios from 'axios';

const DeleteButton = (props) => {
    const { personId, successCallBack } = props; 
    const deletePerson = e => {
        axios.delelte('http://localhost:8000/api/person/' + personId)
            .then(res => {
                successCallBack();
            })
    }

    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

export default DeleteButton;