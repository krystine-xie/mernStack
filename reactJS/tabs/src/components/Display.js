import React from 'react';
import styles from './Display.module.css';

const Display = (props) => {
    
    return (
        <div className={styles.displayBox}>
            { props.display }
        </div>
    )

}

export default Display;
