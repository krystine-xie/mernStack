import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import styles from './Detail.module.css';

import { Link } from '@reach/router';

const Detail = (props) => {
    const [item, setItem] = useState({});
    
    const fetchItem = () => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setItem(res.data[0]);
                console.log(res.data[0]);
            });
    }

    useEffect(fetchItem, 
        // eslint-disable-next-line
        []);

    return (
        <div className={styles.wrapper}>
            <h2>{item.title}</h2>
            <p><b>Price: </b> ${item.price}</p>
            <p><b>Description: </b>{item.description}</p>
            <Link to={"/products/" + item._id + "/edit"}> Edit</Link><br></br>
            <Link to={"/"}>Go Home</Link>
        </div>
    )
}

export default Detail;