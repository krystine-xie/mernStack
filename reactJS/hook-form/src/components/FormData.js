import React from 'react';
import styles from './FormData.module.css';

const FormData = (props) => {
    return (
        <div className={styles.formData}>
            <h3 className={styles.title}>Your Form Data</h3>
            <table className={styles.table}>
                <tr>
                    <td>First Name</td>
                    <td>{props.data.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{props.data.lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{props.data.email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{props.data.password}</td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>{props.data.confirmPassword}</td>
                </tr>
            </table>
        
        </div>
    )
}

export default FormData;