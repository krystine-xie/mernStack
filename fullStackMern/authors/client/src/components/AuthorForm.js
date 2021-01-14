import React, { useState } from 'react';
import styles from './AuthorForm.module.css';

const AuthorForm = (props) => {

    const { onSubmitProp, errors, authorToEdit } = props;

    const [firstName, setFirstName] = useState(authorToEdit.firstName); 
    const [lastName, setLastName] = useState(authorToEdit.lastName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            _id: authorToEdit._id,
            firstName: firstName, 
            lastName: lastName
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors && errors.map((err, index) => <p className={styles.error} key={index}>{err}</p>)}
                <p>
                    <label>Author First Name</label><br />
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </p>
                <p>
                    <label>Author Last Name</label><br />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </p>
                <input
                    type="submit" 
                />
                <input
                    type="submit"
                    value="Cancel"
                />
            
            </form>
        </div>
    )

}

export default AuthorForm;