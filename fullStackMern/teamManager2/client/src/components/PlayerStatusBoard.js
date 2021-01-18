import React from 'react'; 
import styles from './PlayerTable.module.css';

const PlayerStatusBoard = props => {

    const {num, players, updateStatus} = props;

    const onClickHandle = (e) => {
        updateStatus(num, e.target.attributes.player.value, e.target.attributes.status.value);
        // console.log(num, e.target.attributes.player.value, e.target.attributes.status.value);
    }

    return (
        <div className={styles.wrapper}>
            <h3>Player Status - Game {num}</h3>
            <table>
                <thead>
                    <tr>
                        <th>PLAYER NAME</th>
                        <th>PLAYER STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        players.map((player, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button 
                                            className={player[`game${num}Status`] === "Playing" ? styles.playing : styles.inactive}
                                            onClick={(e) => onClickHandle(e)}
                                            status={"Playing"}
                                            player={player._id}
                                        >
                                            Playing
                                        </button>
                                        <button 
                                            className={player[`game${num}Status`] === "Not Playing" ? styles.notPlaying : styles.inactive}
                                            onClick={(e) => onClickHandle(e)}
                                            status={"Not Playing"}
                                            player={player._id}
                                        >
                                            Not Playing
                                        </button>
                                        <button 
                                            className={player[`game${num}Status`] === "Undecided" ? styles.undecided : styles.inactive}
                                            onClick={(e) => onClickHandle(e)}
                                            status={"Undecided"}
                                            player={player._id}
                                        >
                                            Undecided
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

export default PlayerStatusBoard;