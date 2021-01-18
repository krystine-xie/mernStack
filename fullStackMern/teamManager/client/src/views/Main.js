import React, { useState, useEffect } from 'react'
import { Link, Router, Redirect } from '@reach/router';
import axios from 'axios';

import ManagePlayerPage from './ManagePlayerPage';
import ManageStatusPage from './ManageStatusPage';
 
const Main = () => {
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

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div>
            <h1>Team Manager</h1>
            <Link to="/">Manage Players</Link> | 
            <Link to="status/game/1">Manage Player Status</Link>
            <Router>
                <Redirect noThrow from="/" to="players/list" />
                { loaded && <ManagePlayerPage 
                    path="/players/list" 
                    players={players}
                    setPlayers={setPlayers}
                    removeFromDom={removeFromDom}
                /> }
                <ManageStatusPage
                    path="/status/game/:num" 
                    players={players}
                />
            </Router>
        
        </div>
    )

}

export default Main;
