import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton'; 

const PersonList = (props) => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setPeople(res.data));
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
    };

    
    return (
        <div>
            {props.people.map((person, idx) => {
                return <p key={idx}>
                    <Link to={"/" + person._id}>
                        {person.lastName}, {person.firstName}
                    </Link>
                    |
                    <DeleteButton personId={person._id} successCallback={()=> removeFromDom(person._id) }  />
                </p>
            })}
        </div>
    )
}

export default PersonList;