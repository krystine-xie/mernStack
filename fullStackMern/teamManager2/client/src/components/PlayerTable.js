import React from 'react';
import styles from './PlayerTable.module.css';

const PlayerTable = props => {
    const {players, deletePlayer} = props; 

    const confirmDelete = (playerId, playerName) => {
        if (window.confirm(`Are you sure you want to delete ${playerName}?`)) {
            deletePlayer(playerId);
        } 
    }

    return (
        <div className={styles.wrapper}>
            <h3>LIST OF PLAYERS</h3>
            <table>
                <thead>
                    <tr>
                        <th>PLAYER NAME</th>
                        <th>PREFERRED POSITION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button
                                            onClick={() => confirmDelete(player._id, player.name)}
                                            className={styles.delete}
                                        >
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default PlayerTable;