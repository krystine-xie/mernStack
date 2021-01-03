import React from 'react'; 
import styles from './UserForm.module.css';

const UserForm = ({input, setInput}) => {
    //const {input, setInput} = props;

    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form className={styles.form}>
            <div className={styles.inputGroup}>
                <label className={styles.label}>First Name:</label>
                <input className={styles.input} type="text" name="firstName" onChange={onChange} />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name:</label>
                <input className={styles.input} type="text" name="lastName" onChange={onChange} />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Email: </label>
                <input className={styles.input} type="text" name="email" onChange={onChange} />
            </div>
            <div className={styles.inputGroup}> 
                <label className={styles.label}>Password: </label>
                <input className={styles.input} type="password" name="password" onChange={onChange} />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Confirm Password:</label>
                <input className={styles.input} type="password" name="confirmPassword" onChange={onChange} />
            </div>
        </form>
    );
};

export default UserForm;