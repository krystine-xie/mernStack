import React from 'react';
import { Link } from '@reach/router';

const ManagePlayerLinks = () => {
    return (
        <div>
            <Link to="/players/list">LIST</Link> | 
            <Link to="/players/addplayer">ADD PLAYER</Link>
        </div>
    )
}

export default ManagePlayerLinks;