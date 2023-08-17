import React from 'react'
import Card from './Card'
import classes from '../styles/game.module.css'
import {Box} from '@chakra-ui/react'

function Middle(props) {
    const displayCard = props.middleList[props.deck][props.middleList[props.deck].length - 1];
    const heavyDisplayCard = props.readCard(displayCard);

    return (
        props.middleList[props.deck].length === 0 ?
            <Box
                height="130px"
                width="80px"
                backgroundColor= 'red'
                borderRadius= "15px"
                opacity={.2}
                onClick={() => { props.emptyClickCard(props.deck) }}/>
            
            // <div className={classes.placeholder} 
            //     onClick={() => { props.emptyClickCard(props.deck) }}/>
            
            :
            <Card
                suit={heavyDisplayCard.suit}
                number={heavyDisplayCard.number}
                color={heavyDisplayCard.color}
                faceUp={displayCard[props.readProp("faceUp")] === 1}
                selected={displayCard[props.readProp("selected")] === 1}
                sprite={heavyDisplayCard.sprite}
                deck={props.deck}
                clickCard={props.clickCard}
            />

    )
}

export default Middle