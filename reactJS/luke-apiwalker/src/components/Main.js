import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Data from './Data';
import { Router } from '@reach/router';


import axios from 'axios';

const Main = (props) => {

    const [starWarsData, setStarWarsData] = useState([]);
    
    axios.get('https://swapi.dev/api/')
        .then(response=>{
            setStarWarsData(response.data)
            console.log(response.data)
        })

    return (
        <div>
            <SearchBar data={starWarsData} />
            <Router>
                <Data path="/:category/:id" />
            </Router>
        </div>
    )
}

export default Main;