import React from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => {

    return (
        <div>
            <Link to="/players/list">MANAGE PLAYERS</Link> | 
            <Link to="/status/game/1">MANAGE STATUSES</Link>
        </div>
    )
}

export default NavBar;