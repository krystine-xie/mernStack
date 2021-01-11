import React from 'react';
import { Link } from '@reach/router';

const PersonPage = (props) => {

    const { name, height, mass, hair_color, skin_color } = props.person;
    const { homeId, homeData } = props

    return (
        <div>
            <h2>{name}</h2>
            <p><b>Height: </b> {height} cm</p>
            <p><b>Mass: </b> {mass} kg</p>
            <p><b>Hair Color: </b> {hair_color}</p>
            <p><b>Skin Color: </b> {skin_color}</p>
            <p><b>Homeworld: </b> <Link to = {`/planets/${homeId}`}> {homeData.name} </Link></p>
        </div>
    )
}

export default PersonPage;