import React from 'react'
import { Link, Router } from '@reach/router';

import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';
 
const ManagePlayerPage = (props) => {
    const { players, removeFromDom, setPlayers } = props;
    return (
        <div>
            <Link to="/">LIST</Link> | 
            <Link to="/players/add">ADD PLAYER</Link>
            <Router>
                <PlayerList 
                    path="list"
                    removeFromDom={removeFromDom}
                    players={players}
                />
                <PlayerForm 
                    path="add"
                    players={players}
                    setPlayers={setPlayers}
                />
            </Router>
        </div>
    )

}

export default ManagePlayerPage;
