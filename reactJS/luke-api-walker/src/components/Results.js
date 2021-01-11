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
    const [homeId, setHomeId] = useState(null);
    const [homeData, setHomeData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                setResults(response.data);
                setError(false);
                if (category === 'people') {
                    const planetId = response.data.homeworld.slice(29).slice(0, -1);
                    axios.get(`https://swapi.dev/api/planets/${planetId}`)
                        .then(response1 => {
                            setHomeId(planetId);
                            setHomeData(response1.data);
                        });
                }
            })
            .then()
            .catch(err => setError(true));
    }, [category, id]);
    
    return (
        <div className={styles.wrapper}>
            { 
                error ? 
                    <ErrorPage />
                    : category.toLowerCase() === 'people' ? 
                    <PersonPage 
                        person={results}
                        homeId={homeId}
                        homeData={homeData}
                    />
                    : category.toLowerCase() === 'planets' ?
                    <PlanetPage planet={results} /> :
                    ''  
            }
        </div>
    )
} 

export default Results;