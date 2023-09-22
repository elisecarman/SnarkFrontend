import React from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import uuid from 'uuid/v4'

const socket  = require('../connection/socket').socket


/**
 * 'Join game' is where we actually join the game room. 
 */


const JoinGameRoom = (gameid, userName, isCreator, id) => {
    /**
     * For this browser instance, we want 
     * to join it to a gameRoom. For now
     * assume that the game room exists 
     * on the backend. 
     *  
     * 
     */
    const idData = {
        gameId : gameid,
        userName : userName,
        isCreator: isCreator,
        id: id
    }

    socket.emit("playerJoinGame", idData)

    
}
  
  
const JoinGame = (props) => {
    /**
     * Extract the 'gameId' from the URL. 
     * the 'gameId' is the gameRoom ID. 
     */
    const cookies = new Cookies();
    const {gameid} = useParams();

    let id = cookies.get('id');
    
    if (id === undefined){
        id = uuid();
        cookies.set('id', id, { path: '/' })
    }
    

    JoinGameRoom(gameid, props.userName, props.isCreator, id);

    
    return <div>
        {/* <h1 style = {{textAlign: "center"}}>Welcome to Snark</h1> */}
    </div>
}

export default JoinGame
  
