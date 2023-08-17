import React, {useState} from 'react'
import Game from '../game_components/Game';
import { useChatContext } from 'stream-chat-react';

function Lobby({channel}) {
const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);
const {client} = useChatContext();

channel.on("user.watching.start", async (event) => {
    setPlayersJoined(event.watcher_count === 2);
    // const players = channel.data.players;
    // await channel.updatePartial({set : {players : }})
});

if (!playersJoined){
    return (<h1> waiting for others</h1>)
}
  return (
    <div className='gameContainer'> 
    </div>
  )
}

export default Lobby