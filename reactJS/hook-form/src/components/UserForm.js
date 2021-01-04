import React, { useState } from 'react'; 
import styles from './UserForm.module.css';

const UserForm = ({input, setInput}) => {
    //const {input, setInput} = props;
    const [fnError, setFnError] = useState("");
    const [lnError, setLnError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");
    
    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleFirstName = (e) => {
        onChange(e); 
        if (e.target.value.length === 1) {
            setFnError("First name must be at least 2 characters!");
        } else if (e.target.value.length >= 2 || e.target.value.length === 0) {
            setFnError("");
        }
    } 

    const handleLastName = (e) => {
        onChange(e); 
        if (e.target.value.length === 1) {
            setLnError("Last name must be at least 2 characters!");
        } else if (e.target.value.length >= 2 || e.target.value.length === 0) {
            setLnError("");
        }
    } 

    const handleEmail = (e) => {
        onChange(e); 
        if (e.target.value.length === 1) {
            setEmailError("Email must be at least 2 characters!");
        } else if (e.target.value.length >=2 || e.target.value.length === 0) {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        onChange(e); 
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else if (e.target.value.length >= 8 || e.target.value.length === 0) {
            setPasswordError("");
        }
    }

    const handleConfirmPW = (e) => {
        onChange(e);
        if (e.target.value !== input.password) {
            setConfirmPWError("Passwords must match!")
        } else {
            setConfirmPWError("");
        }

        if (e.target.value.length === 0) {
            setConfirmPWError("")
        }
    }
    
    return(
        <form className={styles.form}>
            <div className={styles.inputGroup}>
                <label className={styles.label}>First Name:</label>
                <input className={styles.input} type="text" name="firstName" onChange={handleFirstName} />
            </div>
            {
                fnError ? 
                <p className={styles.error}>{ fnError }</p> :
                ''
            }
            <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name:</label>
                <input className={styles.input} type="text" name="lastName" onChange={handleLastName} />
            </div>
            {
                lnError ? 
                <p className={styles.error}>{ lnError }</p> :
                ''
            }

            <div className={styles.inputGroup}>
                <label className={styles.label}>Email: </label>
                <input className={styles.input} type="text" name="email" onChange={handleEmail} />
            </div>
            {
                emailError ? 
                <p className={styles.error}>{ emailError }</p> :
                ''
            }

            <div className={styles.inputGroup}> 
                <label className={styles.label}>Password: </label>
                <input className={styles.input} type="password" name="password" onChange={handlePassword} />
            </div>
            {
                passwordError ? 
                <p className={styles.error}>{ passwordError }</p> :
                ''
            }

            <div className={styles.inputGroup}>
                <label className={styles.label}>Confirm Password:</label>
                <input className={styles.input} type="password" name="confirmPassword" onChange={handleConfirmPW} />
            </div>
            {
                confirmPWError ? 
                <p className={styles.error}>{ confirmPWError }</p> :
                ''
            }
        </form>
    );
};

export default UserForm;