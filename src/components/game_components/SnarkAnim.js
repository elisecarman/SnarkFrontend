import React from 'react'
import { useEffect, useState } from 'react';
import {
    Modal,
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
    GridItem
} from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import classes from '../styles/game.module.css'
import snarker from "../../assets/clubs/club11.png"

function SnarkAnim(props) {
    const [text, setText] = useState("");

    var words = props.words,
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 10,
        speed = 70;

// interval function from https://codepen.io/alvarotrigo/pen/ZEJgqLN

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            }
            else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substring(0, offset);
            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                }
                else {
                    offset--;
                }
            }
            if (i === 3){
                props.setVisible(false)
            } else{
                setText(part);
            }
            
        }, speed);
        return () => clearInterval(interval);
    }, []);

    
  return (
    <>
        <div className={classes.word}>
            {text}
        </div>
    </>
  )
}

export default SnarkAnim