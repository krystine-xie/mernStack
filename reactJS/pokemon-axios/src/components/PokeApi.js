import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                setPokemon(response.data.results)
                console.log(response);
            })
    }, []);

    const displayPokemon = () => {
        setLoaded(true); 
    }

    return (
        <div className="wrapper">
            <button onClick={displayPokemon}>Fetch Pokemon</button>
            <ul>
                {loaded && pokemon.map((creature, index) => {
                    return (
                        <li key={index}>{creature.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokeApi;