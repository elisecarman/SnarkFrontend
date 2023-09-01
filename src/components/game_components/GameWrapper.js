import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Grid, GridItem, Image, IconButton, Button, Spacer, HStack, Box, VStack, Textarea, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { redirect, useParams } from 'react-router-dom'
import classes from '../styles/game.module.css'
import Loading from '../../onboard/Loading'
import Cookies from 'universal-cookie';
import Tutorial from './Tutorial'
import Game from './Game'


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class GameWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            gameStarted: false,
            playerArr: {},
            loggedOut: false,
            mounted: false,
            gameId: 0
        }
    };

    cookies = new Cookies();
    socket = require('../../connection/socket').socket
    gameid = this.props.params.gameid;
    domainName = 'http://localhost:3000/SnarkFrontend'
    // domainName = 'http://elisecarman.github.io/SnarkFrontend'


    setGameStarted = (bool) => {
        let state = this.state;
        state.gameStarted = bool;
        this.setState(state);
    }

    setPlayerArr = (arr) => {
        let state = this.state;
        state.playerArr = arr;
        this.setState(state);
    }

    logOut = (bool) => {
        let state = this.state;
        state.loggedOut = bool;
        this.setState(state);
    }

    setOpen = (bool) => {
        let state = this.state;
        state.isOpen = bool;
        this.setState(state);
    }

    exit = () => {
        this.logOut(true);

        this.cookies.remove("username", { path: '/' });
        this.cookies.remove("gameStarted", { path: '/' })
        this.cookies.remove("isCreator", { path: '/' });
        this.cookies.remove("gameId", { path: '/' });
        this.cookies.remove("joined", { path: '/' });
        this.cookies.remove("playerArr", { path: '/' });
        this.cookies.remove("id", { path: '/' });

        // this.socket.emit('exit', {gameId : this.gameid});
    }

    componentDidMount(){
        let state = this.state;

        if (state.mounted){
            const joined = this.cookies.get('joined');
            if (joined !== undefined){
                this.socket.emit('lobby logout',
                {
                    isCreator: this.cookies.get('isCreator'),
                    gameId: this.gameid,
                    username: this.cookies.get('username'),
                    id: this.cookies.get('id')
                });

                console.log("refresh logout");
                this.exit();

            } else
            {
            this.socket.on("status", statusUpdate => {
                console.log(statusUpdate.message)
                if (statusUpdate.gameId === this.gameid) {

                    if (statusUpdate.message === 'This game session does not exist.'
                        || statusUpdate.message === 'There is already the maximum amount of players in this room.') {

                        console.log("time out logout");
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


                        this.logOut(true);

                        if (statusUpdate.message === "There is already the maximum amount of players in this room."){
                            alert(statusUpdate.message);
                        }
                        // this.socket.emit('exit', { gameId: this.gameid });
                    }
                }
            })

            this.socket.on('new player', (idData) => {
                console.log('new player');
                if ((idData.gameId === this.gameid) && (idData.userName !== "")) {

                    // let p_arr = this.cookies.get('playerArr');
                    if ((idData.id in (this.state.playerArr) === false) &&
                        (idData.id === this.state.id) &&
                        (this.props.isCreator)) {
                        console.log("--> onboarding creator: " + idData.userName)

                        let arr = this.state.playerArr;
                        arr[idData.id]= (idData.userName);
                        this.setPlayerArr(arr);
                        this.cookies.set('playerArr', arr, {path :'/'})

                    } else {
                        if ((idData.id in this.state.playerArr === false) && (idData.id !== this.state.id)) {

                            var arr = this.state.playerArr;
                            arr[idData.id] = (idData.userName);
                            this.setPlayerArr(arr);
                            this.cookies.set('playerArr', arr, { path: '/' })


                            console.log("array after player joined: ")
                            console.log(this.state.playerArr);

                            if (this.props.isCreator) {
                                console.log('welcoming');
                                this.socket.emit("welcome new player", {
                                    recipient: idData.userName,
                                    gameId: idData.gameId,
                                    message: this.state.playerArr,
                                    id: idData.id
                                }
                                );
                            }

                        }
                    }
                }
            })

            this.socket.on('start', (gid) => {
                if (gid === this.gameid) {
                    this.setGameStarted(true);
                    this.cookies.set("gameStarted", Object.keys(this.state.playerArr).length, { path: '/' })
                }
            })

            this.socket.on('welcome', (data) => {
                if (data.gameId === this.gameid) {
                    if (this.state.id === data.id) {
                        console.log(data);
                        this.setPlayerArr(data.message)
                        this.cookies.set('playerArr', data.message, {path: '/'});
                        
                    }
                }
            }
            )
            
            this.socket.on('lobby logout', (data) => {
                if (data.gameId === this.gameid) {
                    console.log('confusled');

                    if (this.state.id !== data.id) {
                        let message = "";

                        if (data.isCreator){
                            console.log("collateral logout");
                            this.exit();
                            message = 'the game creator left the room!'
                            alert(message);

                        } else{
                            console.log('player leaving');
                            const playersLeft = this.state.playerArr;
                            delete playersLeft[data.id];
                            
                            this.setPlayerArr(playersLeft);
                            message = data.username + ' left the room!'
                            console.log(message);
                        }
                        console.log(":D");
                        
                    }
                }
            })

            let p = this.cookies.get('playerArr');
            state.playerArr = ( p === undefined ? {} : p)
            this.cookies.set('joined', true, {path: '/'});}
            state.id = this.cookies.get('id');

        }else{
            state.mounted = true;
        }

        this.setState(state);

    }

  render() {
    
    return (
        <React.Fragment>
            {(this.cookies.get("gameStarted") !== undefined) ? (
                <>
                    <div>
                        <div style={{ display: "flex" }}>
                            <Game
                                gameId={this.gameid}
                                // color={color.didRedirect}
                                myUserName={this.props.myUserName}
                                isCreator={this.props.isCreator}
                                playerArr={this.state.playerArr}
                                loggedOut={this.state.loggedOut}
                                logOut={this.logOut}
                                id={this.state.id}
                            />
                        </div>
                    </div>
                </>
            ) : this.state.loggedOut ? (
                <>
                    <Navigate to="/SnarkFrontend/"></Navigate>
                </>
            ) : (
                <div >
                    <HStack marginTop={window.innerHeight / 5}
                        alignItems="center"
                        >
                        <Spacer />
                        <Box >
                            {
                                this.props.isCreator ?
                                    <>
                                        <div
                                            className={classes.join_game}
                                            width='100%'>
                                            <div style={{ fontSize: '60px' }}>Hi <strong>{this.props.myUserName}</strong>! </div>
                                            <div style={{ fontSize: '20px' }}>
                                                <br></br>
                                                COPY AND PASTE THE URL BELOW
                                                <br></br>
                                                TO SEND TO YOUR FRIENDS
                                                <br></br>
                                                (3 MIN, 7 MAX)
                                                <br></br>
                                                <br></br>
                                            </div>
                                            <Textarea
                                                style={{ maxWidth: "580px", height: "30px" }}
                                                onFocus={(event) => {
                                                    event.target.select()
                                                }}
                                                color='white'
                                                onChange={() => { }}
                                                // value={this.domainName + "/game/" + this.gameid}
                                                value={this.gameid}
                                                type="text"
                                                className={classes.onboard_title}
                                                height='20px'>
                                            </Textarea>
                                        </div>
                                    </>
                                    :
                                    <></>
                            }
                        </Box>

                        <Box width='60px' />
                        <Box alignItems={'end'} marginTop={'-100px'}>
                            <VStack height={'100%'} alignItems={'start'}>
                                <Box>
                                    <h1
                                        className={classes.onboard_title}
                                        style={{
                                            textAlign: "center",
                                            fontSize: '40px',
                                            fontStyle: 'italic'
                                        }}>
                                        <Loading />
                                        {" "}waiting for opponents...{" "}
                                    </h1>
                                </Box>
                                <Spacer />
                                <Box>
                                    <HStack alignItems={'start'}>
                                        <Box>
                                        <VStack alignItems={'start'}>
                                            
                                        <Box>
                                        <Button
                                            variant={'outline'}
                                            style={{ width: "120px", height: "40px" }}
                                            zIndex={20}
                                            onClick={() => {
                                                this.setOpen(true);
                                            }}
                                        >
                                            snark rules
                                        </Button>
                                        <Modal
                                            isOpen={this.state.isOpen}
                                            onClose={() => { this.setOpen(false) }}
                                        >
                                            <ModalOverlay
                                            />
                                            <ModalContent
                                                marginTop={'20px'}
                                                minH={'43rem'}
                                                minW={'54rem'}>
                                                <Tutorial
                                                />
                                            </ModalContent>
                                        </Modal>
                                        </Box>
                                        <Box>
                                        {this.props.isCreator ?
                                            <Box>
                                                <Button
                                                    disabled={(Object.keys(this.state.playerArr).length < 3)}
                                                    onClick={() => { this.socket.emit("start", this.gameid) }}
                                                    style={{ width: "120px", height: "40px" }}
                                                >
                                                    start game
                                                </Button>
                                            </Box>
                                            :
                                            <></>
                                            }
                                        </Box>
                                        <Box >
                                            <IconButton
                                                marginTop='10px'
                                                colorScheme="red"
                                                isRound={true}
                                                icon={<CloseIcon />}
                                                // height='20px'
                                                onClick={() => {
                                                    this.socket.emit('lobby logout',
                                                        {
                                                            isCreator: this.cookies.get('isCreator'),
                                                            gameId: this.gameid,
                                                            username: this.cookies.get('username'),
                                                            id: this.state.id
                                                        });
                                                    console.log("voluntary logout");
                                                    this.exit();
                                                }}
                                            >

                                            </IconButton>
                                        </Box>
                                        </VStack>
                                            </Box>
                                            
                                    </HStack>
                                </Box>
                            </VStack>
                        </Box>
                        <Box width={'200px'}>
                            <VStack 
                            marginLeft={'20px'}
                            height='100%'
                            alignItems={'start'}>
                                <Spacer />
                                {Object.keys(this.state.playerArr).map((player, index) => (
                                    <Box key={index}>
                                        <h3
                                            className={classes.onboard_title}
                                            key={index}
                                            style={{ fontSize: '25px' }}>
                                            {this.state.playerArr[player]}
                                        </h3>
                                    </Box>
                                ))
                                }
                            </VStack>
                        </Box>
                        <Spacer />
                    </HStack>
                </div>
            )}

        </React.Fragment>
    )
  }
}

export default withParams(GameWrapper);
