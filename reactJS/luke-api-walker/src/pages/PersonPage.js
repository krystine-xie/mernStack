import React from 'react';

const PersonPage = (props) => {

    const { name, height, mass, hair_color, skin_color, homeworld } = props.person;

    return (
        <div>
            <h2>{name}</h2>
            <p><b>Height: </b> {height} cm</p>
            <p><b>Mass: </b> {mass} kg</p>
            <p><b>Hair Color: </b> {hair_color}</p>
            <p><b>Skin Color: </b> {skin_color}</p>
            <p><b>Homeworld: </b> {homeworld}</p>
        </div>
    )
}

export default PersonPage;