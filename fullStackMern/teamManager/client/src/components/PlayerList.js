import React from 'react';
import DeleteButton from './DeleteButton';
 

const PlayerList = props => {

    const { players, removeFromDom } = props;

    return (
        <div>
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
                                    <td><DeleteButton 
                                            playerId={player._id}
                                            removeFromDom={removeFromDom}
                                        />
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

export default PlayerList;

