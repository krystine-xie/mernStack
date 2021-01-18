import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import { Link } from '@reach/router';
import NavBar from '../components/NavBar';

import PlayerStatusBoard from '../components/PlayerStatusBoard';

const PlayerStatusPage = (props) => {
    
    const { num } = props;

    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then((res) => {
                setPlayers(res.data); 
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateDom = player => {
        for (let i=0; i < players.length; i++) {
            if (player._id === players[i]._id) {
                var index = i; 
                // console.log(index)
            } 
            // console.log(player);
        }

        let newArray = [...players]
        newArray[index] = player; 
        setPlayers(newArray);
    }

    const updateStatus = (num, playerId, status) => {

        // find player id
        let targetPlayer = players.filter((player) => player._id === playerId)[0];

        // console.log(targetPlayer.game1Status);

        if (num === "1") {
            targetPlayer.game1Status = status;
        } else if (num === "2") {
            targetPlayer.game2Status = status;
        } else if (num === "3") {
            targetPlayer.game3Status = status;
        }

        // console.log("Player to update: " + targetPlayer.name);
        // console.log("Status chosen: " + status);
        // console.log("Game number: " + num);
        // console.log(targetPlayer)
     
        axios.put(`http://localhost:8000/api/players/${playerId}`, targetPlayer)
            .then((res) => {
                updateDom(targetPlayer);
            })
            .catch((err) => console.log(err))
    }




    return (
        <div>
            <h1>TEAM MANAGER</h1>
            <NavBar />
            <Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link>
            {loaded && <PlayerStatusBoard
                num={num}
                players={players}
                updateStatus={updateStatus}
            />}
        </div>
    )

}

export default PlayerStatusPage;

