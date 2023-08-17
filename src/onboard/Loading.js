import React from 'react'
import { Box, Image, Spacer, HStack} from '@chakra-ui/react'

import diamond11 from "../assets/diamonds/diamond11.png"
import club12 from "../assets/clubs/club12.png"
import heart13 from "../assets/hearts/heart13.png"

import classes from "../components/styles/game.module.css"

function Loading() {
  return (
    
    <div>
        <HStack alignItems={'end'} height='150px'>
            <div className={classes.loading1}>
                <Image 
                height='100px'
                src={diamond11}/>
            </div>
            <div className={classes.loading2}>
                <Image
                    height='100px'
                    src={club12} />
            </div>
            <div className={classes.loading3}>
                <Image
                    height='100px'
                    src={heart13} />
            </div>
        </HStack>
    </div>
  )
}

export default Loading