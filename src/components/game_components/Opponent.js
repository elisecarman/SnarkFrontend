import React, { Component } from 'react'
import Card from './Card'
import { Grid, GridItem, HStack, Box, Flex, Image, Spacer, VStack } from '@chakra-ui/react'
import classes from '../styles/game.module.css'
import flag from "../../assets/peace.png"



export default class Opponent extends Component {


    render() {
        const opponents = Object.keys(this.props.players)
        const rowLength = 3;
        const slots = opponents.length
        const rows = Math.ceil(slots / rowLength)

        return (
            <>

                {Array(rows).fill(1).map((i, index) => (
                    <HStack key={index} marginTop={'3px'}>
                        {(opponents).slice(index * rowLength, (index + 1) * rowLength).map((player, index2) =>
                            <Box key={index2}>
                                <Player
                                    username={this.props.players[player].username}
                                    buildList_1={this.props.players[player].buildList_1}
                                    buildList_2={this.props.players[player].buildList_2}
                                    buildList_3={this.props.players[player].buildList_3}
                                    buildList_4={this.props.players[player].buildList_4}
                                    snarkList={this.props.players[player].snarkList}
                                    flag={this.props.players[player].flag}
                                    readCard={this.props.readCard}
                                />
                            </Box>
                        )
                        }
                    </HStack>
                ))
                }
            </>

        )
    }
}

function Player(props) {
    return (
        <HStack>

            <Box>
                <div className={classes.opponent}>
                    {/* <div
                style={{ 
                    backgroundColor: 'rgba(80, 3, 3, 0.888)',
                    opacity: .7,
                    position: 'absolute',
                    height: '65px',
                    width: '180px'
                }}></div> */}

                    <HStack marginTop={-2} marginBottom={2}>

                        <Spacer />
                        <div className={classes.opponent_text}>
                            {props.username}
                        </div>
                        <Spacer />

                    </HStack>
                    <HStack>
                        <div style={{
                            width: '25px',
                            heigth: '25px',
                            backgroundColor: 'red',
                            borderRadius: '5px',
                            marginRight: '15px'
                        }}>
                            {(props.snarkList >= 0) ?
                                <Image loading = "lazy" src={props.readCard([props.snarkList]).icon} />
                                :
                                <></>
                            }
                        </div>

                        <div style={{
                            width: '25px',
                            heigth: '25px',
                            backgroundColor: 'white',
                            borderRadius: '5px'
                        }}>
                            {(props.buildList_1 >= 0) ?
                                <Image loading = "lazy" src={props.readCard([props.buildList_1]).icon} />
                                :
                                <></>
                            }

                        </div>

                        <div style={{
                            width: '25px',
                            heigth: '25px',
                            backgroundColor: 'white',
                            borderRadius: '5px'
                        }}>
                            {(props.buildList_2 >= 0) ?
                                <Image loading = "lazy" src={props.readCard([props.buildList_2]).icon} />
                                :
                                <></>
                            }

                        </div>

                        <div style={{
                            width: '25px',
                            heigth: '25px',
                            backgroundColor: 'white',
                            borderRadius: '5px'
                        }}>
                            {(props.buildList_3 >= 0) ?
                                <Image loading = "lazy" src={props.readCard([props.buildList_3]).icon} />
                                :
                                <></>
                            }

                        </div>

                        <div style={{
                            width: '25px',
                            heigth: '25px',
                            backgroundColor: 'white',
                            borderRadius: '5px'
                        }}>
                            {(props.buildList_4 >= 0) ?
                                <Image loading = "lazy" src={props.readCard([props.buildList_4]).icon} />
                                :
                                <></>
                            }

                        </div>
                    </HStack>
                </div>
            </Box>
            <Box>
                {
                    (props.flag === true) ?
                        <Image 
                            loading = "lazy"
                            src={flag}
                            width='30px'>
                        </Image>
                        :
                        <div style={{ width: '30px' }}>
                        </div>
                }

            </Box>
        </HStack>
    )
}