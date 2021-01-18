import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

import PlayerTable from '../components/PlayerTable';
import NavBar from '../components/NavBar';
import ManagePlayerLinks from '../components/ManagePlayerLinks';


const HomePage = (props) => {
    
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                console.log(res.data);
                setPlayers(res.data);
                setLoaded(true);
            })
    }, [])

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
            .then(res => {
                setPlayers(players.filter(player => player._id !== playerId));
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h1>TEAM MANAGER</h1>
            <NavBar />
            <ManagePlayerLinks />
            {loaded && <PlayerTable
                players={players}
                deletePlayer={deletePlayer}
            />}

        </div>
    )

}

export default HomePage;

