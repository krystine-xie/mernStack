import React, { useState } from 'react'; 
import styles from './ColorForm.module.css';

const ColorForm = (props) => {
    const [newColor, setNewColor] = useState("");
    const [newSize, setNewSize] = useState("");
    
    const createBox = (e) => {
        e.preventDefault();
        props.onCreate( newColor, newSize );
        setNewColor("");
        setNewSize(0);
    }

    return(
        <form onSubmit={ createBox }>
            <div className={styles.form}>
                <label>Color: </label>
                <input 
                    type="text" 
                    onChange={ (e) => setNewColor(e.target.value) }  
                    value={newColor} >
                </input>
            </div>
            <div className={styles.form}>
                <label>Size: </label>
                <input 
                    type="number" 
                    onChange={ (e) => setNewSize(e.target.value) }  
                    value={newSize}
                    defaultValue={ 100 } >
                </input>
            </div>
            <div className={styles.form}>
                <input type="submit" value="Add!" />
            </div>
        </form>
    )
}

export default ColorForm;