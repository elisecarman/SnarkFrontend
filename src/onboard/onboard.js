import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Image, HStack, Box, Input, Button, Spacer, VStack, Stack, GridItem, Grid} from '@chakra-ui/react'
import table from "../assets/table.png"
import jack from "../assets/clubs/club11.png"

import classes from '../components/styles/game.module.css'
import uuid from 'uuid/v4'
import { ColorContext } from '../context/colorcontext' 
import Cookies from 'universal-cookie'
const socket  = require('../connection/socket').socket

/**
 * Onboard is where we create the game room.
 */

class CreateNewGame extends React.Component {
    state = {
        didGetUserName: false,
        inputText: "",
        gameId: "",
        createGame: true,
        joinedGame: false

    }
    cookies = new Cookies();

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.idArea = React.createRef();
    }
    
    send = () => {
        /**
         * This method should create a new room in the '/' namespace
         * with a unique identifier. 
         */
        const newGameRoomId = uuid()
        // set the state of this component with the gameId so that we can
        // redirect the user to that URL later. 
        this.setState({
            gameId: newGameRoomId
        })

        this.cookies.set("gameId", newGameRoomId, { path: '/' });
        this.cookies.set("isCreator", true, { path: '/' });
        // emit an event to the server to create a new room 
        socket.emit('createNewGame', newGameRoomId)
    }

    typingUserName = () => {
        // grab the input text from the field from the DOM 
        const typedText = this.textArea.current.value
        
        // set the state with that text
        this.setState({
            inputText: typedText
        })

    }

    typingGameId = () => {
        // grab the input text from the field from the DOM 
        const typedId = this.idArea.current.value

        // set the state with that text
        this.setState({
            gameId: typedId
        })

    }

    render() {
        // !!! TODO: edit this later once you have bought your own domain. 
        const cookies = new Cookies;
        const username = cookies.get("username");
        const gameId = parseInt(cookies.get("gameId"));

        return (<React.Fragment>
            {/* DOMAIN x 2*/}
            {
            this.state.joinedGame ?

            <Navigate to={"/game/" + this.state.gameId}></Navigate>

            :
                // this.state.didGetUserName ? 
                username !== undefined?
                <Navigate to = 
                {"/game/" + this.state.gameId}></Navigate>
            
            :
                <div>
                    <div className={classes.onboard_elements}>
                    <div className={classes.onboard_title}>
                    <div style={{fontSize :"120px"}}>Welcome to </div>
                        <HStack>
                        <Box
                        width={window.innerWidth / 7 * 2}
                        ></Box>
                        <Box>
                        <div style={{ textAlign: "center", 
                        fontStyle: 'italic', 
                        fontSize: "160px",
                        marginTop: '-60px'}}>
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
                    <HStack marginBottom={'8px'}>
                        <Spacer/>
                                   
                        <Button style={{ width: "60px"}}
                                        backgroundColor={this.state.createGame ? '#e1e8ed' : '#f7f9fa'}
                        _active={true}
                        _focus={true}
                        onClick={() =>
                            {console.log("beep");
                            this.setState({createGame : true});}
                        }
                        >Create</Button>
                        <div>or</div>
                        <Button style={{ width: "60px"}}
                                        backgroundColor={this.state.createGame ? '#f7f9fa' : '#e1e8ed'}
                        onClick={()=>{
                            this.setState({ createGame: false })}}
                        _active={false}
                        >Join</Button>
                        <Spacer />
                    </HStack>

                    {/* <Grid
                        templateColumns='repeat(7, 1fr)'
                        gap={0}
                        marginTop={0}>
                        <GridItem colSpan={3}/>
                        <GridItem colSpan={1}>
                        {this.state.createGame ?
                            <Box>
                                <VStack >

                                    <Input style={{ width: "240px", marginTop: "60px", border: '2px' }}
                                        ref={this.textArea}
                                        onInput={this.typingUserName}
                                        placeholder='Your username'
                                        textAlign={'center'}
                                        alignContent={'center'}
                                        // _focus={true}
                                        variant='outline'
                                        _placeholder={{ opacity: 1, color: 'gray.500' }}></Input>
                                    <Button className="btn btn-primary"
                                        style={{ width: "120px", marginTop: "32px" }}
                                        disabled={!(this.state.inputText.length > 0)}
                                        onClick={() => {
                                            // When the 'Submit' Button gets pressed from the username screen,
                                            // We should send a request to the server to create a new room with
                                            // the uuid we generate here.
                                            this.props.didRedirect()
                                            this.props.setUserName(this.state.inputText);
                                            cookies.set("username", this.state.inputText, { path: '/' });
                                            this.setState({
                                                didGetUserName: true
                                            })
                                            this.send()
                                        }}>Create Game</Button>
                                </VStack>
                            </Box>
                            :
                            <Box>
                                <VStack >
                                    <Input style={{ width: "240px", marginTop: "60px", border: '2px', borderColor: 'red' }}
                                        ref={this.idArea}
                                        onInput={this.typingGameId}
                                        placeholder='Game ID'
                                        textAlign={'center'}
                                        alignContent={'center'}
                                        // _focus={true}
                                        variant='outline'
                                        _placeholder={{ opacity: 1, color: 'gray.500' }}>
                                    </Input>

                                    <Button className="btn btn-primary"
                                        style={{ width: "120px", marginTop: "32px" }}
                                        disabled={!(this.state.gameId.length > 0)}
                                        onClick={() => {
                                            this.setState({
                                                joinedGame: true
                                            })
                                        }}>Join Game</Button>
                                </VStack>
                            </Box>}
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Image
                                // marginRight={'-40px'}
                                src={jack}
                                height='200px'
                                transform='rotate(20deg)'
                                // marginLeft={vh/5 * 3}
                                zIndex={10}
                            ></Image>
                        </GridItem>
                        <GridItem colSpan={2} />
                        
                    </Grid> */}

                    <HStack>
                        <Spacer/>
                        {
                        this.state.createGame ?
                        <Box>
                                <VStack >
                                
                                <Input style={{ width: "240px", marginTop: "60px", border: '2px' }}
                                    ref={this.textArea}
                                    onInput={this.typingUserName}
                                    placeholder='Your username'
                                    textAlign={'center'}
                                    alignContent={'center'}
                                    // _focus={true}
                                    variant='outline'
                                    _placeholder={{ opacity: 1, color: 'gray.500' }}></Input>
                                <Button className="btn btn-primary"
                                    style={{ width: "120px", marginTop: "32px" }}
                                    disabled={!(this.state.inputText.length > 0)}
                                    onClick={() => {
                                        // When the 'Submit' Button gets pressed from the username screen,
                                        // We should send a request to the server to create a new room with
                                        // the uuid we generate here.
                                        this.props.didRedirect()
                                        this.props.setUserName(this.state.inputText);
                                        cookies.set("username", this.state.inputText, { path: '/' });
                                        this.setState({
                                            didGetUserName: true
                                        })
                                        this.send()
                                    }}>Create Game</Button>
                            </VStack>
                        </Box>
                        :
                        <Box>
                            <VStack >
                                <Input style={{ width: "240px", marginTop: "60px", border: '2px', borderColor: 'red' }}
                                    ref={this.idArea}
                                    onInput={this.typingGameId}
                                    placeholder='Game ID'
                                    textAlign={'center'}
                                    alignContent={'center'}
                                    // _focus={true}
                                    variant='outline'
                                    _placeholder={{ opacity: 1, color: 'gray.500' }}>
                                </Input>

                                <Button className="btn btn-primary"
                                    style={{ width: "120px", marginTop: "32px" }}
                                    disabled={!(this.state.gameId.length > 0)}
                                    onClick={() => {
                                        this.setState({
                                            joinedGame: true
                                        })
                                    }}>Join Game</Button>
                            </VStack>
                        </Box>
                        }
                        
                        <HStack
                            style ={{position: 'absolute'}}
                            className={classes.onboard_jack}
                            width='99%'

                        >
                        <Spacer/>
                        <div style={{width: '420px'}} />
                        <Image 
                        src={jack}
                        height= '200px'
                        transform= 'rotate(20deg)'
                        className={classes.onboard_jack}
                        zIndex={10}
                        ></Image>
                        <Spacer />
                        </HStack>
                        <Spacer />
                    </HStack>
                       
                </div>
                </div>
            }
            
            </React.Fragment>)
    }
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext)
    return <CreateNewGame didRedirect = {color.playerDidRedirect} setUserName = {props.setUserName}/>
}


export default Onboard