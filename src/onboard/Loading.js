import React from 'react'
import { Box, Image, Spacer, HStack} from '@chakra-ui/react'

import diamond11 from "../assets/cards/diamonds/diamond11.webp"
import club12 from "../assets/cards/clubs/club12.webp"
import heart13 from "../assets/cards/hearts/heart13.webp"

import classes from "../components/styles/game.module.css"

function Loading() {
  return (
    
    <div>
        <HStack alignItems={'end'} height='150px'>
            <div className={classes.loading1}>
                <Image 
                    loading = "lazy" 
                    height='100px'
                    src={diamond11}/>
            </div>
            <div className={classes.loading2}>
                <Image 
                    loading = "lazy"
                    height='100px'
                    src={club12} />
            </div>
            <div className={classes.loading3}>
                <Image 
                    loading = "lazy"
                    height='100px'
                    src={heart13} />
            </div>
        </HStack>
    </div>
  )
}

export default Loading