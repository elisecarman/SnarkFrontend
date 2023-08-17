import React from 'react'
import classes from '../styles/game.module.css'
import { Image, Box } from '@chakra-ui/react'
import back from "../../assets/back.png"

function Card(props) {
    return (
        props.faceUp ?
            <div>
                {props.selected ?
                    <div onClick={() => { props.clickCard(props.deck, props.index) }}>
                        <Box 
                        height="130px"
                        width="80px"
                        >
                        <Image
                            src={props.sprite}
                            height="130px"
                            width="80px"
                            // border="2px solid red"
                            filter= "hue-rotate(-40deg)"
                            borderRadius={15}
                        />
                        </Box>
                    </div>
                    :
                    <div onClick={() => { props.clickCard(props.deck, props.index) }}>
                        <Box
                            height="130px"
                            width="80px">
                        <Image
                            src={props.sprite}
                            height="130px"
                            width="80px"
                            // border="2px solid white"
                            borderRadius={15}
                        />
                        </Box>

                    </div>}
            </div>
            :

            <div>
                <Box
                    height="130px"
                    width="80px">
                <Image
                    src={back}
                    // border="2px solid white"
                    borderRadius={15}
                    height="130px"
                    width="80px"
                />
                </Box>
            </div>
    )
}

export default Card