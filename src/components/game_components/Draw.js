import React from 'react'
import Card from './Card'
import { Grid, GridItem, Image, HStack, Box, Spacer } from '@chakra-ui/react'
import back from "../../assets/back.png"
import classes from "../styles/game.module.css"



function Draw(props) {
    
    return (
        ((props.last3Draw === true)  && (props.drawList.length !== 0)) ?
            <div className={classes.draw_mat}>
            <HStack spacing='8px'>
                {props.drawList.map((card, index) => (
                    <Box key={index}>
                        <Card
                            suit={props.readCard(card).suit}
                            number={props.readCard(card).number}
                            color={props.readCard(card).color}
                            faceUp={card[props.readProp("faceUp")] === 1}
                            selected={card[props.readProp("selected")] === 1}
                            sprite={props.readCard(card).sprite}
                            deck={"drawList"}
                            clickCard={props.clickCard}
                            index={index}
                        />
                    </Box>
                ))
                }
            </HStack> 
            </div>
        :

        <>
         <div className={classes.draw_mat}>
            <HStack marginTop={'-10px'}>
                <Spacer/>
                <Box>
                    <div onClick={() => { props.drawCard() }}>
                    {props.drawIndex === props.drawList.length - 1 ?
                        // <div className={classes.placeholder}></div>
                        <Box
                            height="130px"
                            width="80px"
                            backgroundColor= 'blue'
                            borderRadius= "15px"
                            opacity={.2}
                        />
                        :
                        <Box
                            height="130px"
                            width="80px"
                        >
                        <Image 
                            loading = "lazy"
                            height="130px"
                            width="80px"
                            src={back}
                            borderRadius={15}/>
                        </Box>
                    }
                    </div>
                </Box>
                <Spacer/>
                <Box>
                    {(props.drawIndex === -1) ?
                        
                        <Box
                            height="130px"
                            width="80px"
                            backgroundColor= 'blue'
                            borderRadius= "15px"
                            opacity={.2}
                        />
                        // <div className={classes.placeholder} />
                        :
                        <>
                        <Card
                            suit={props.readCard(props.drawList[props.drawIndex]).suit}
                            number={props.readCard(props.drawList[props.drawIndex]).number}
                            color={props.readCard(props.drawList[props.drawIndex]).color}
                            faceUp={props.drawList[props.drawIndex][props.readProp("faceUp")] === 1}
                            selected={props.drawList[props.drawIndex][props.readProp("selected")] === 1}
                            index={props.drawIndex}
                            sprite={props.readCard(props.drawList[props.drawIndex]).sprite}
                            clickCard={props.clickCard}
                            deck={"drawList"}
                        />
                        </>
                    }
                </Box>
                <Spacer/>
            </HStack>
         </div>
        </>
    )
}

export default Draw