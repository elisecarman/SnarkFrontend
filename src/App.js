
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import JoinRoom from './onboard/joinroom'
import { ColorContext } from './context/colorcontext'
import Onboard from './onboard/onboard'
import JoinGame from './onboard/joingame'
import { useState } from 'react';
import './App.css';
import Game from './components/game_components/Game';
import GameWrapper from './components/game_components/GameWrapper';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { StreamChat } from 'stream-chat';
import Cookies from 'universal-cookie';
import GameManager from './components/auth/GameManager';
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  const [didRedirect, setDidRedirect] = React.useState(false)

  const playerDidRedirect = React.useCallback(() => {
    setDidRedirect(true)
  }, [])

  const playerDidNotRedirect = React.useCallback(() => {
    setDidRedirect(false)
  }, [])

  const [userName, setUserName] = React.useState('')

  const api_key = "jn44q7vzr8zw";
  const cookies = new Cookies();

  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);

  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  }

  if (token){
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedPassword"),
    }, 
    token).then((user)=>{
      setIsAuth(true);
    })
  }

  const isCreator = cookies.get("isCreator") !== undefined
  const repoName = "SnarkFrontend"

  return (
    <ChakraProvider>
      <ColorContext.Provider value={{ didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect }}>
        <Router>
          <Routes>
            <Route path="/SnarkFrontend/" exact element={<Onboard setUserName={setUserName} />}>
            </Route>
            <Route path="/SnarkFrontend/game/:gameid" exact element ={
              isCreator ?
                <React.Fragment>
                  <JoinGame userName={userName} isCreator={true} />
                  
                  <GameWrapper myUserName={userName} isCreator={true}/>
                </React.Fragment>
                :
                <JoinRoom />
            }>
            </Route>
            <Route render={() => <Navigate to="/SnarkFrontend/" />} />
          </Routes>
        </Router>
      </ColorContext.Provider>
    </ChakraProvider>
  );
}

/* isAuth ?
  <Chat client={client}>
    <button onClick={logOut}>
      Log Out
    </button>
  </Chat>
  :
  <>
    <SignUp setIsAuth={setIsAuth} />
    <Login setIsAuth={setIsAuth} />
  </> */

export default App;
