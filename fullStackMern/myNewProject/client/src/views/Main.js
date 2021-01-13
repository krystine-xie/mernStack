import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList'; 

const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/person")
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            })
    }, []);

    const createPerson = person => {
        axios.post('http://localhost:8000/api/person', person)
            .then(res => {
                setPeople([...people, res.data]);
            }) 
    }

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }

    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr/ >
            {
                loaded && <PersonList people={people} removeFromDom={removeFromDom} />
            }
        </div>
    )
}

export default Main;