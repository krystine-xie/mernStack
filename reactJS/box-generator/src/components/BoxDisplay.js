import React from 'react'; 
import styles from './BoxDisplay.module.css';

const BoxDisplay = (props) => {
    const boxes = props.boxes;

    return (
        <div className={styles.boxDisplay}>
            {
                boxes.map( (box, i) =>
                    <div className={styles.box} style={{backgroundColor: box.color, width: box.size + "px", height: box.size + "px" }} key={ i }></div> 
                ) 
            }
        </div>
    );
}

export default BoxDisplay;