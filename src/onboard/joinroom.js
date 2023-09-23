import React from 'react'
import JoinGame from './joingame'
import Game from '../components/game_components/Game'
import GameWrapper from '../components/game_components/GameWrapper'
import Cookies from 'universal-cookie';
import { IconButton, Image, HStack, Box, Input, Button, Spacer, VStack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import classes from '../components/styles/game.module.css'
import jack from "../assets/clubs/club11.png"
import { Navigate } from 'react-router-dom';


/**
 * Onboard is where we create the game room.
 */

class JoinRoom extends React.Component {
    state = {
        didGetUserName: false,
        inputText: "",
        redirect: false
    }

    cookies = new Cookies();


    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }
    socket = require('../connection/socket').socket

    componentDidMount = () => {
        const joined = this.cookies.get('joined');
        if (joined !== undefined) {
            console.log("window close logout");
            this.cookies.remove("username", { path: '/' });
            this.cookies.remove("buildList_1", { path: '/' });
            this.cookies.remove("buildList_2", { path: '/' });
            this.cookies.remove("buildList_3", { path: '/' });
            this.cookies.remove("buildList_4", { path: '/' });
            this.cookies.remove("snarkList", { path: '/' });
            this.cookies.remove("drawList", { path: '/' });
            this.cookies.remove("middleList", { path: '/' });
            this.cookies.remove("draw_index", { path: '/' });
            this.cookies.remove("score", { path: '/' });
            this.cookies.remove("last_3_draw", { path: '/' });
            this.cookies.remove("shuffled", { path: '/' });
            this.cookies.remove("mounted", { path: '/' });
            this.cookies.remove("gameStarted", { path: '/' })
            this.cookies.remove("isCreator", { path: '/' });
            this.cookies.remove("gameId", { path: '/' });
            this.cookies.remove("players", { path: '/' });
            this.cookies.remove("scores", { path: '/' });
            this.cookies.remove("snarker", { path: '/' });
            this.cookies.remove("gameOver", { path: '/' });
            this.cookies.remove("flag", { path: '/' });
            this.cookies.remove("playerArr", { path: '/' });
            this.cookies.remove("joined", { path: '/' });
            this.cookies.remove("id", { path: '/' });

            this.setState({ redirect: true })
        }
    }

    typingUserName = () => {
        // grab the input text from the field from the DOM 
        const typedText = this.textArea.current.value
        
        // set the state with that text
        this.setState({
            inputText: typedText
        })
    }
    

    render() {
        const username = this.cookies.get("username");

    return (<React.Fragment>


            {
                this.state.redirect ?
                <Navigate to="/"></Navigate>
                :
                this.state.didGetUserName ?
                // username !== undefined ? 
                <React.Fragment>
                    <JoinGame userName = {this.state.inputText} isCreator = {false}/>
                    <GameWrapper myUserName = {this.state.inputText} isCreator = {false} />
                </React.Fragment>
            :
                <div>
                    <div>
                    <div className={classes.onboard_elements}>
                        <div className={classes.onboard_title}>
                            <div style={{ fontSize: "120px" }}>Welcome to </div>
                            <HStack>
                            <Box
                            width={window.innerWidth / 7 * 2}
                            ></Box>
                            <Box>
                            <div style={{
                                textAlign: "center",
                                fontStyle: 'italic',
                                fontSize: "160px",
                                marginTop: '-60px'
                            }}>
                                SNARK
                            </div>
                            </Box>
                            <Box>
                                <div className={classes.onboard_credits}>
                                    coded and illustrated
                                    <br></br>
                                    by <a href="https://elisecarman.github.io">Elise Carman</a>
                                </div>
                            </Box>
                            </HStack>
                        </div>
                        <HStack marginTop={'49px'}>
                            <Spacer />

                            <Box>
                                <VStack>
                                    {/* <div className={classes.onboard_text}>
                                        Join a game!
                                    </div> */}
                                    <Input style={{ width: "240px", marginTop: "60px", border: '2px' }}
                                        ref={this.textArea}
                                        textAlign={'center'}
                                        onInput={this.typingUserName}
                                        placeholder='Now, your username'
                                        alignContent={'center'}
                                        _focus={true}
                                        borderColor={'gray.600'}
                                        _placeholder={{ opacity: 1, color: 'gray.500' }}>
                                    </Input>
                                    <HStack>
                                    
                                    <Button className="btn btn-primary"
                                        style={{ width: "120px" }}
                                        disabled={!(this.state.inputText.length > 0)}
                                        onClick={() => {
                                            // When the 'Submit' Button gets pressed from the username screen,
                                            // We should send a request to the server to create a new room with
                                            // the uuid we generate here.
                                            this.setState({
                                                didGetUserName: true

                                            })

                                            this.cookies.set("username", this.state.inputText, { path: '/' });
                                    }}>Submit</Button>
                                    </HStack>
                                </VStack>
                            </Box>
                                <HStack
                                    style={{ position: 'absolute' }}
                                    className={classes.onboard_jack}
                                    width='99%'
                                >
                                    <Spacer />
                                    <div style={{ width: '420px' }} />
                                    <Image
                                        src={jack}
                                        height='200px'
                                        transform='rotate(20deg)'
                                        className={classes.onboard_jack}

                                        zIndex={10}
                                    ></Image>
                                    <Spacer />
                                </HStack>
                            {/* <Image
                                src={jack}
                                height='200px'
                                transform='rotate(20deg)'
                                marginLeft='20px'
                                zIndex={10}
                            ></Image> */}
                            <Spacer />
                        </HStack>

                    </div>
                </div>
                </div>
            }
            </React.Fragment>)
    }
}

export default JoinRoom