import React, {useState} from 'react'
import { useChatContext, Channel } from 'stream-chat-react';
import Lobby from './Lobby';

function GameManager() {
    const [rivalUsername, setRivalUsername] = useState("")
  
    const {client} = useChatContext();
    const [channel, setChannel] = useState(null);

    const createChannel = async () => {
        // const response = await client.queryUsers({ name: { $eq: rivalUsername }});
        // if (response.users.length === 0){
        //     alert("user not found");
        //     return;
        // }

        const newChannel = await client.channel("messaging",rivalUsername,{
            members: [client.userID], //, response.users[0].id
            player1: client.userID
        }) 

        await newChannel.watch();
        setChannel(newChannel);
    }
  return (
    <>
    {
    channel ?
    (<Channel channel={channel}>
    <Lobby channel={channel}/>
    </Channel>)
    :
    (<div className='gameManager'>
        Join Game!
        <input placeholder='New Game'
                onChange={(event) => {
                    setRivalUsername(event.target.value)}}/>
        <button onClick={createChannel}>Create Game</button>

        <input placeholder='Join Existing Game'
            onChange={(event) => {
                setRivalUsername(event.target.value)
            }} />
        <button onClick={createChannel}>Create Game</button>

    </div>)
    }
      </>
  );
      
}

export default GameManager