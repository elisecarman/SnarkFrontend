import React from 'react'
import { Grid, GridItem, Image, IconButton, Button, Spacer, HStack, Box, VStack, Textarea, Icon, useForceUpdate } from '@chakra-ui/react'
import classes from '../styles/game.module.css'


function Rules(props) {


    const text = {
        'snark' : 
        <div className={classes.snark_rule}>
            This is your snark pile. It starts with 10 cards. 
            For every card in your snark pile, 2 points are substracted from your total score.
            You must get the highest score and prioritize emptying your snark pile!
            The game ends as soon as a player completely empties their snark pile.
            <br></br>
            Note: you cannot add cards onto your snark pile.
        </div>,

        'draw':
        <div className={classes.snark_rule}>
            This is your draw pile. The draw pile is traversed three cards at a time. 
            On first draw, you will only have access to the third card. 
            Once the third card is played, you will have access to the second, and so on.
            To draw three more cards, simply click the face down card.
            <br></br>
            Note: you cannot add cards onto your draw pile.
        </div>,

        'build':
        <div className={classes.snark_rule}>
            These are your build piles. You may add cards to them in Solitaire style:
            cards must alternate in colors and directly decrease in number 
            (i.e. you may place a black 5 onto a red 6). 
            Only kings may be placed onto empty build piles.
        </div>,

        'middle':
        <div className={classes.snark_rule}>
            This is the space in which you and your opponents simultaneously add cards.
            Only an ace can fill an empty slot, and from there cards must be of the same suit
            and directly increasing (i.e. you can place a 10 of clubs on a 9 of clubs).
            You gain a point for each card you successfully place in this space.
            Beware, other players may place their cards before yours! 
            <br></br>
            Your opponents (here, just Elbow) are displayed above the empty slots. Under their username
            are shown their top snark card (leftmost), and their top build pile cards.
        </div>,

        'score':
        <div className={classes.snark_rule}>
            This number above is the number of cards remaining in your snark pile.
            <br></br>
            <br></br>
            This white flag can be toggled on to signal to other players that you are stuck and cannot play anymore cards.
            If all players raise a white flag, the game will be declared officially stuck and scores will be displayed.
            Here, the white flag next to Elbow's name indicates they are currently stuck.
            <br></br>

        </div>


    }
  return (
    <Box
    visibility={props.visibility ? 'visible' : 'hidden'}
    zIndex={20}
    // position= 'absolute'
    >
    {text[props.component]}
    </Box>
  )
}

export default Rules