import React from 'react'; 
import axios from 'axios'; 
import styles from './DeleteButton.module.css';

const DeleteButton = props => {
    const { productId, successCallback } = props; 
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <button 
            className={styles.deleteButton}
            onClick={deletePerson}
        >
            Delete
        </button>
    )
}

export default DeleteButton;
