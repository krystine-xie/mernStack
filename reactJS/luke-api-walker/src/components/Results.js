import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ErrorPage from '../pages/ErrorPage';
import PersonPage from '../pages/PersonPage';
import PlanetPage from '../pages/PlanetPage';

import styles from './Results.module.css';


const Results = (props) => {
    const { category, id } = props; 
    const [error, setError] = useState(false);
    const [results, setResults] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                setResults(response.data);
                setError(false);
            })
            .catch(err => setError(true));
    }, [category, id]);
    
    return (
        <div className={styles.wrapper}>
            { 
                error ? 
                    <ErrorPage />
                    : category.toLowerCase() === 'people' ? 
                    <PersonPage person={results} />
                    : category.toLowerCase() === 'planets' ?
                    <PlanetPage planet={results} /> :
                    ''
            }
        </div>
    )
} 

export default Results;