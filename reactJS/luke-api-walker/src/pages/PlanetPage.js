import React from 'react';

const PlanetPage = (props) => {

    const { name, climate, terrain, surface_water, population  } = props.planet;

    return (
        <div>
            <h2>{name}</h2>
            <p><b>Climate: </b> {climate}</p>
            <p><b>Terrain: </b> {terrain}</p>
            <p><b>Surface Water: </b> {surface_water}</p>
            <p><b>Population: </b> {population}</p>
        </div>
    )
}

export default PlanetPage;