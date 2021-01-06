import React, { useState } from 'react'; 

const PokemonButton = (props) => {

    const [pokemon, setPokemon] = useState([]); 

    const handleClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="wrapper">
            <button onClick={handleClick}>Fetch Pokemon</button>
            <ul>
                {pokemon ? pokemon.map((creature, index) => {
                    return (
                        <li key={index}>{creature.name}</li>
                    )
                }) : null }
            </ul>
        </div>


    )
}

export default PokemonButton;