import React from 'react';
import axios from 'axios';
import styles from './DeleteButton.module.css';
import { navigate } from '@reach/router';

const DeleteButton = props => {

    const { authorId, successCallback } = props;

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                successCallback(authorId);
                navigate('/');
            })
    }

    return (
        <button
            className={styles.deleteButton}
            onClick={deleteAuthor}
        >
            Delete
        </button>
    )
}

export default DeleteButton;