import React from 'react';
import { navigate } from '@reach/router';
import styles from './EditButton.module.css';

const EditButton = props => {

    const { authorId } = props;

    return (
        <button 
            className={styles.editButton}
            onClick={() => navigate(`/authors/${authorId}/edit`)}
        >
            Edit
        </button>
    )
}

export default EditButton;