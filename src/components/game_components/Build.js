import React from 'react'
import Card from './Card'
import classes from "../styles/game.module.css"
import {Box} from '@chakra-ui/react'

function Build(props) {

    return (
        props.buildList.length === 0 ?
        <Box
                height="130px"
                width="80px"
                backgroundColor= 'red'
                borderRadius= "15px"
                opacity={.2}
                onClick={() => { props.emptyClickCard(props.deck) }}/>

            // <div className={classes.placeholder}
            //     onClick={() => { props.emptyClickCard(props.deck) }}></div>
            :
            <div style={{ marginTop: "98px" }}>


                {props.buildList.map((card, index) => (

                    <div key={index} style={{ marginTop: "-100px" }}>
                        <Card
                            suit={props.readCard(card).suit}
                            number={props.readCard(card).number}
                            color={props.readCard(card).color}
                            faceUp={card[props.readProp("faceUp")] === 1}
                            selected={card[props.readProp("selected")] === 1}
                            sprite={props.readCard(card).sprite}
                            deck={props.deck}
                            clickCard={props.clickCard}
                            index={index}
                        />
                    </div>
                ))
                }
            </div >
    )
}

export default Build