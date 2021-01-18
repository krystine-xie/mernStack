import React, { useState } from 'react'; 
import axios from 'axios';
import { navigate } from '@reach/router';

import NavBar from '../components/NavBar';
import ManagePlayerLinks from '../components/ManagePlayerLinks';
import AddPlayerForm from '../components/AddPlayerForm';

const AddPlayerPage = (props) => {
    
    const [errors, setErrors] = useState([]);

    const createPlayer = (newPlayer) => {

        axios.post("http://localhost:8000/api/players", newPlayer)
            .then(res => {
                console.log(res.data);
                navigate("/players/list");
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message);
                }
                setErrors(errArr);
            })
    }
    
    return (
        <div>
            <h1>TEAM MANAGER</h1>
            <NavBar />
            <ManagePlayerLinks />
            <h3>ADD PLAYER</h3>
            <AddPlayerForm
                createPlayer={createPlayer}
                errors={errors}
            />
        </div>
    )

}

export default AddPlayerPage;
