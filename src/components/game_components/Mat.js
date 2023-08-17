import React, { Component } from 'react'
import { Grid, GridItem, HStack, Box } from '@chakra-ui/react'
import Middle from './Middle'

export default class Mat extends Component {

    render() {

        const rowLength = 7;
        const slots = this.props.numPlayers * 4
        const rows = Math.ceil(slots / rowLength)

        return (
            Object.keys(this.props.middleList).length === 0 ?
            <div></div>
            :
            <div>
                {Array(rows).fill(1).map((card, index) => (

                    <HStack key={index} marginTop={'5px'} alignItems={'center'}>
                        {Array(Math.min(rowLength, slots - (index * rowLength))).fill(1).map((card, index2) => (
                            <Box key={index2}>
                                < Middle 
                                    middleList={this.props.middleList}
                                    deck= {index2 + (index * rowLength)}
                                    emptyClickCard={this.props.emptyClickCard}
                                    clickCard={this.props.clickCard} 
                                    readCard={this.props.readCard} 
                                    readProp={this.props.readProp} />
                            </Box>
                        ))
                        }  
                    </HStack>

                ))
                }

            </div>
        )
    }
}
