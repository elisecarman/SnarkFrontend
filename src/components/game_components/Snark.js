import React from 'react'
import Card from './Card'
import { Image } from '@chakra-ui/react'
import back from "../../assets/back.png"
import classes from "../styles/game.module.css"
import {Box} from '@chakra-ui/react'

function Snark(props) {
    const index = props.snarkList.length - 1;
    const last_card = (props.snarkList[index]);

    return (
        props.snarkList.length === 0 ?
            <Box
                height="130px"
                width="80px"
                backgroundColor= 'red'
                borderRadius= "15px"
                opacity={.2}/>
            :
            <div>

                <Image 
                    loading = "lazy"
                    src={back}
                    height="120px"
                    width="80px"
                    borderRadius={15}

                />

                <div style={{ marginTop: "-110px" }}>
                    {props.snarkList.length === 0 ?
                        <div></div>
                        :
                        <Card
                            suit={props.readCard(last_card).suit}
                            number={props.readCard(last_card).number}
                            color={props.readCard(last_card).color}
                            faceUp={true}
                            selected={last_card[props.readProp("selected")] === 1}
                            sprite={props.readCard(last_card).sprite}
                            deck="snarkList"
                            index={index}
                            clickCard={props.clickCard}
                        />
                    }
                </div>
            </div>
    )
}

export default Snark