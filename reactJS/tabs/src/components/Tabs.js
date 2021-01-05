import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = (props) => {
    const onClickHandler = (e, value) => {
        e.preventDefault();
        props.onDisplay(value);
    }

    return (
        <div className={styles.tabRow}>
                {
                    props.items.map( (item, i) => {
                        return <button className={styles.button} onClick={ (e) => onClickHandler(e, item.content)}>{item.label}</button>
                    })
                }

        </div>
    
    )

}

export default Tabs;