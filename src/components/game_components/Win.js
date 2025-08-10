import React from 'react'
import { useEffect, useState } from 'react';
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    HStack,
    VStack,
    Box,
    Spacer,
    Image,
    AspectRatio,
    Grid,
    GridItem,
    Center
} from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import classes from '../styles/game.module.css'
import snarker from "../../assets/clubs/club11.png"
import SnarkAnim from './SnarkAnim'
import snark from '../../assets/Snark.png'


function Win(props) {
const { isOpen, onOpen, onClose } = useDisclosure()
const [visible, setVisible] = useState(true);

const calculateWinner = (scores) => {
    let players = Object.keys(scores);
    players.sort(function(a,b){return scores[b][1]-scores[a][1]})
    return players
}


var winners = calculateWinner(props.scores);

return (

    <div>
        {/* calculateWinner(props.scores)  */}
        <Modal isOpen={props.open} onClose={props.closeWin} width={window.innerWidth/ 3 * 2} >
            <ModalOverlay />
            <ModalContent 
            maxW="56rem" 
            maxH="36rem" 
            minH="36rem"
            overflow={'hidden'}
            style={{zIndex: 0 }}
            backgroundColor={  'white'}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    {
                    (visible && (props.snarker !== "")) ?
                    // <VStack>
                    // <Spacer/>
                    <Box
                    marginTop={'10rem '}
                    >
                    <SnarkAnim
                        words={['Snark!!!', '-' + props.snarker, ';)', 'end']}
                        setVisible={setVisible}
                    />
                    </Box>
                    // <Spacer />
                    // </VStack>
                    :
                    <div className={classes.win_recap}>
                        {/* <Box
                        position={'absolute'}
                        >
                            {
                                (props.snarker === "") ?
                                    <></>
                                    :
                                    <>
                                        <Box
                                            padding='40px'
                                            marginTop={'-50px'}
                                            maxW='270px'
                                            minW='260px'
                                            width='100%'
                                            borderRadius='15px'
                                            backgroundColor={'black'}
                                            color={'white'}
                                            alignItems='center'>
                                            <Image loading = "lazy"
                                                src={snark}
                                                height={'90px'}
                                                minH={'90px'}
                                                alignSelf={'start'}
                                                marginLeft={'-15px'}>
                                            </Image>
                                            <div className={classes.win_snarker}>{props.snarker}</div>
                                            <HStack>
                                                <Spacer />
                                               
                                                <Spacer />
                                            </HStack>
                                        </Box>
                                    </>
                            }
                        </Box> */}
                        <HStack>
                            <Spacer/>   
                            <Box>
                                <div className={classes.win_title}>Good game!</div>
                            </Box>
                            <Spacer/>
                        </HStack>
                                
                        
                        <VStack height={'100%'} marginTop={'45px'}>
                            <Spacer/>
                            <Box>
                                <HStack>
                                    

                                    <Box>
                                    <HStack 
                                    // backgroundColor={'white'}
                                    borderRadius={'20px'}
                                    padding={'15px'}
                                    minW={'20rem'}
                                    minH={'20rem'}
                                    alignItems={'start'}
                                    marginTop={'-10px'}
                                    >
                                        <Spacer/>
                                        <Box>
                                        <div className={classes.win_list}>
                                                    {winners.map((player, index) => (
                                                <div key={index}>
                                                    {(props.scores[player][0] === props.snarker)?
                                                    <>
                                                        <Image 
                                                            loading = "lazy"
                                                            src={snark}
                                                            height={'90px'}
                                                            minH={'90px'}
                                                            alignSelf={'start'}
                                                            marginLeft={'-100px'}
                                                            marginTop={'-50px'}
                                                            position={'absolute'}>
                                                        </Image>
                                                        <Box>{props.scores[player][1]} </Box>
                                                        <br></br>
                                                    </>
                                                    :
                                                    <>
                                                        <Box>{props.scores[player][1]} </Box>
                                                        <br></br>
                                                    </>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </Box>
                                    <Box><div style={{ width: "20px" }} /></Box>
                                    <Box>
                                        <div className={classes.win_list}>
                                                    {winners.map((player, index) => (
                                                <div key={index}>
                                                        <Box>{props.scores[player][0]} </Box>
                                                    <br></br>
                                                </div>
                                            ))}
                                        </div>
                                    </Box>
                                    <Spacer />
                                    </HStack>
                                    </Box>


                                    <Spacer />
                                </HStack>
                            </Box>
                            <Spacer />
                        </VStack>
                    </div> }
                      
                </ModalBody>

                <ModalFooter  
                width={'100%'}
                >
                    <div className={classes.win_recap}>
                        <Button colorScheme='red' 
                        alignSelf={'center'} 
                        marginTop='-120px'
                        onClick={props.closeWin} >
                            Return to Menu
                        </Button>
                    </div>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default Win