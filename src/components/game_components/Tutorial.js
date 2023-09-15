import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Grid, GridItem, Image,  IconButton, Button, Spacer, HStack, Box, VStack, Textarea, Icon, useForceUpdate } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { useChannelStateContext } from 'stream-chat-react'
import classes from '../styles/game.module.css'
import Build from './Build'
import Draw from './Draw'
import Snark from './Snark'
import Mat from './Mat'
import Opponent from './Opponent'
import Loading from '../../onboard/Loading'
import Win from './Win'
import Rules from './Rules'

import { redirect, useParams } from 'react-router-dom'
import { ColorContext } from '../../context/colorcontext'

import table from "../../assets/table.png"
import flag from "../../assets/peace.png"

import club1 from "../../assets/clubs/club1.png"
import club2 from "../../assets/clubs/club2.png"
import club3 from "../../assets/clubs/club3.png"
import club4 from "../../assets/clubs/club4.png"
import club5 from "../../assets/clubs/club5.png"
import club6 from "../../assets/clubs/club6.png"
import club7 from "../../assets/clubs/club7.png"
import club8 from "../../assets/clubs/club8.png"
import club9 from "../../assets/clubs/club9.png"
import club10 from "../../assets/clubs/club10.png"
import club11 from "../../assets/clubs/club11.png"
import club12 from "../../assets/clubs/club12.png"
import club13 from "../../assets/clubs/club13.png"

import spade1 from "../../assets/spades/spade1.png"
import spade2 from "../../assets/spades/spade2.png"
import spade3 from "../../assets/spades/spade3.png"
import spade4 from "../../assets/spades/spade4.png"
import spade5 from "../../assets/spades/spade5.png"
import spade6 from "../../assets/spades/spade6.png"
import spade7 from "../../assets/spades/spade7.png"
import spade8 from "../../assets/spades/spade8.png"
import spade9 from "../../assets/spades/spade9.png"
import spade10 from "../../assets/spades/spade10.png"
import spade11 from "../../assets/spades/spade11.png"
import spade12 from "../../assets/spades/spade12.png"
import spade13 from "../../assets/spades/spade13.png"

import heart1 from "../../assets/hearts/heart1.png"
import heart2 from "../../assets/hearts/heart2.png"
import heart3 from "../../assets/hearts/heart3.png"
import heart4 from "../../assets/hearts/heart4.png"
import heart5 from "../../assets/hearts/heart5.png"
import heart6 from "../../assets/hearts/heart6.png"
import heart7 from "../../assets/hearts/heart7.png"
import heart8 from "../../assets/hearts/heart8.png"
import heart9 from "../../assets/hearts/heart9.png"
import heart10 from "../../assets/hearts/heart10.png"
import heart11 from "../../assets/hearts/heart11.png"
import heart12 from "../../assets/hearts/heart12.png"
import heart13 from "../../assets/hearts/heart13.png"

import diamond1 from "../../assets/diamonds/diamond1.png"
import diamond2 from "../../assets/diamonds/diamond2.png"
import diamond3 from "../../assets/diamonds/diamond3.png"
import diamond4 from "../../assets/diamonds/diamond4.png"
import diamond5 from "../../assets/diamonds/diamond5.png"
import diamond6 from "../../assets/diamonds/diamond6.png"
import diamond7 from "../../assets/diamonds/diamond7.png"
import diamond8 from "../../assets/diamonds/diamond8.png"
import diamond9 from "../../assets/diamonds/diamond9.png"
import diamond10 from "../../assets/diamonds/diamond10.png"
import diamond11 from "../../assets/diamonds/diamond11.png"
import diamond12 from "../../assets/diamonds/diamond12.png"
import diamond13 from "../../assets/diamonds/diamond13.png"

import h1 from "../../assets/icons/hearts/h1.PNG"
import h2 from "../../assets/icons/hearts/h2.PNG"
import h3 from "../../assets/icons/hearts/h3.PNG"
import h4 from "../../assets/icons/hearts/h4.PNG"
import h5 from "../../assets/icons/hearts/h5.PNG"
import h6 from "../../assets/icons/hearts/h6.PNG"
import h7 from "../../assets/icons/hearts/h7.PNG"
import h8 from "../../assets/icons/hearts/h8.PNG"
import h9 from "../../assets/icons/hearts/h9.PNG"
import h10 from "../../assets/icons/hearts/h10.PNG"
import h11 from "../../assets/icons/hearts/h11.PNG"
import h12 from "../../assets/icons/hearts/h12.PNG"
import h13 from "../../assets/icons/hearts/h13.PNG"

const socket = require('../../connection/socket').socket

// export default 
class Tutorial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snarkList: [],
            buildList_1: [],
            buildList_2: [],
            buildList_3: [],
            buildList_4: [],
            middleList: {},
            drawList: [],
            draw_index: -1,
            last_3_draw: false,
            selected: [],
            selection_index: 0,
            selected_deck: "",
            score: 0,
            players: {},
            mounted: false,
            // logged_out: false,
            snarker: "",
            scores: {},
            gameOver: false,
            flag: false,
            viewRules: true,
            ruleSlide: 0
        }
    };

    rulesOrder = {
        0 : 'snark',
        1: 'draw',
        2: 'build',
        3: 'middle',
        4: 'score',
    }

    showRule =(component) => {
        const rules = {'snark' : 0,
        'draw' : 1,
        'build' : 2,
        'middle': 3,
        'opponent': 3,
        'score': 4,
        'flag': 4,
        'button': 5}

        return (this.state.viewRules && (this.state.ruleSlide === rules[component]))
    }

    reference_cards = [
        { suit: "spades", number: 1, color: "black", sprite: spade1 },
        { suit: "spades", number: 2, color: "black", sprite: spade2 },
        { suit: "spades", number: 3, color: "black", sprite: spade3 },
        { suit: "spades", number: 4, color: "black", sprite: spade4 },
        { suit: "spades", number: 5, color: "black", sprite: spade5 },
        { suit: "spades", number: 6, color: "black", sprite: spade6 },
        { suit: "spades", number: 7, color: "black", sprite: spade7 },
        { suit: "spades", number: 8, color: "black", sprite: spade8 },
        { suit: "spades", number: 9, color: "black", sprite: spade9 },
        { suit: "spades", number: 10, color: "black", sprite: spade10 },
        { suit: "spades", number: 11, color: "black", sprite: spade11 },
        { suit: "spades", number: 12, color: "black", sprite: spade12 },
        { suit: "spades", number: 13, color: "black", sprite: spade13 },

        { suit: "clubs", number: 1, color: "black", sprite: club1 },
        { suit: "clubs", number: 2, color: "black", sprite: club2 },
        { suit: "clubs", number: 3, color: "black", sprite: club3 },
        { suit: "clubs", number: 4, color: "black", sprite: club4 },
        { suit: "clubs", number: 5, color: "black", sprite: club5 },
        { suit: "clubs", number: 6, color: "black", sprite: club6 },
        { suit: "clubs", number: 7, color: "black", sprite: club7 },
        { suit: "clubs", number: 8, color: "black", sprite: club8 },
        { suit: "clubs", number: 9, color: "black", sprite: club9 },
        { suit: "clubs", number: 10, color: "black", sprite: club10 },
        { suit: "clubs", number: 11, color: "black", sprite: club11 },
        { suit: "clubs", number: 12, color: "black", sprite: club12 },
        { suit: "clubs", number: 13, color: "black", sprite: club13 },

        { suit: "diamonds", number: 1, color: "red", sprite: diamond1 },
        { suit: "diamonds", number: 2, color: "red", sprite: diamond2 },
        { suit: "diamonds", number: 3, color: "red", sprite: diamond3 },
        { suit: "diamonds", number: 4, color: "red", sprite: diamond4 },
        { suit: "diamonds", number: 5, color: "red", sprite: diamond5 },
        { suit: "diamonds", number: 6, color: "red", sprite: diamond6 },
        { suit: "diamonds", number: 7, color: "red", sprite: diamond7 },
        { suit: "diamonds", number: 8, color: "red", sprite: diamond8 },
        { suit: "diamonds", number: 9, color: "red", sprite: diamond9 },
        { suit: "diamonds", number: 10, color: "red", sprite: diamond10 },
        { suit: "diamonds", number: 11, color: "red", sprite: diamond11 },
        { suit: "diamonds", number: 12, color: "red", sprite: diamond12 },
        { suit: "diamonds", number: 13, color: "red", sprite: diamond13 },

        { suit: "hearts", number: 1, color: "red", icon: h1, sprite: heart1 },
        { suit: "hearts", number: 2, color: "red", icon: h2, sprite: heart2 },
        { suit: "hearts", number: 3, color: "red", icon: h3, sprite: heart3 },
        { suit: "hearts", number: 4, color: "red", icon: h4, sprite: heart4 },
        { suit: "hearts", number: 5, color: "red", icon: h5, sprite: heart5 },
        { suit: "hearts", number: 6, color: "red", icon: h6, sprite: heart6 },
        { suit: "hearts", number: 7, color: "red", icon: h7, sprite: heart7 },
        { suit: "hearts", number: 8, color: "red", icon: h8, sprite: heart8 },
        { suit: "hearts", number: 9, color: "red", icon: h9, sprite: heart9 },
        { suit: "hearts", number: 10, color: "red", icon: h10, sprite: heart10 },
        { suit: "hearts", number: 11, color: "red", icon: h11, sprite: heart11 },
        { suit: "hearts", number: 12, color: "red", icon: h12, sprite: heart12 },
        { suit: "hearts", number: 13, color: "red", icon: h13, sprite: heart13 },]

    readCard = (lightCard) => {
        if (lightCard === undefined) {
            return {};
        }

        let index = lightCard[0];
        const card = this.reference_cards[index];
        return card;
    }

    readDeck = (deck, index) => {
        let ref = ["buildList_1", "buildList_2", "buildList_3", "buildList_4", "snarkList", "drawList", "middleList"]
        if (deck === "") {
            return ref[index];
        } else {
            ref.forEach((element, i) => {
                if (element === deck) {
                    return i;
                }
            });
        }
    }

    readProp = (prop) => {
        switch (prop) {
            case "index":
                return 0;
            case "faceUp":
                return 1;
            case "selected":
                return 2;
            case "deck":
                return 3;
        }
    }

    assign_deck = (sortedDeck, deckName, start, end) => {
        var state = this.state
        var deck = sortedDeck.slice(start, end);

        for (let i = 0; i < deck.length; i += 1) {
            var card = deck[i];
            const lightDeckName = this.readDeck(deckName, 0);
            card[this.readProp("deck")] = lightDeckName;
            state[deckName].push(card)
        }

        if (deckName === "buildList_1"
            || deckName === "buildList_2"
            || deckName === "buildList_3"
            || deckName === "buildList_4") {
            for (let j = 0; j < state[deckName].length - 1; j += 1) {
                state[deckName][j][this.readProp("faceUp")] = 0;
            }
            state[deckName][state[deckName].length - 1][this.readProp("faceUp")] = 1;

        }

        this.setState(state)
    }

    shuffle = () => {
        var sorted_deck = [ /* card index, face up, selected, origin deck */
            [0, 1, 0],
            [1, 1, 0],
            [2, 1, 0],
            [3, 1, 0],
            [4, 1, 0],
            [5, 1, 0],
            [6, 1, 0],
            [7, 1, 0],
            [8, 1, 0],
            [9, 1, 0],
            [10, 1, 0],
            [11, 1, 0],
            [12, 1, 0],
            [13, 1, 0],
            [14, 1, 0],
            [15, 1, 0],
            [16, 1, 0],
            [17, 1, 0],
            [18, 1, 0],
            [19, 1, 0],
            [20, 1, 0],
            [21, 1, 0],
            [22, 1, 0],
            [23, 1, 0],
            [24, 1, 0],
            [25, 1, 0],
            [26, 1, 0],
            [27, 1, 0],
            [28, 1, 0],
            [29, 1, 0],
            [30, 1, 0],
            [31, 1, 0],
            [32, 1, 0],
            [33, 1, 0],
            [34, 1, 0],
            [35, 1, 0],
            [36, 1, 0],
            [37, 1, 0],
            [38, 1, 0],
            [39, 1, 0],
            [40, 1, 0],
            [41, 1, 0],
            [42, 1, 0],
            [43, 1, 0],
            [44, 1, 0],
            [45, 1, 0],
            [46, 1, 0],
            [47, 1, 0],
            [48, 1, 0],
            [49, 1, 0],
            [50, 1, 0],
            [51, 1, 0]
        ];

        sorted_deck.sort(() => (Math.random() > .5) ? 1 : -1);

        this.assign_deck(sorted_deck, "buildList_1", 0, 1);
        this.assign_deck(sorted_deck, "buildList_2", 1, 3);
        this.assign_deck(sorted_deck, "buildList_3", 3, 6);
        this.assign_deck(sorted_deck, "buildList_4", 6, 10);
        this.assign_deck(sorted_deck, "snarkList", 10, 20);
        this.assign_deck(sorted_deck, "drawList", 20);

        let state = this.state;
        let max_num_plyr = 7;
        for (let i = 0; i < max_num_plyr * 4; i++) {
            state["middleList"][i] = [];
        }

        this.setState(state);
    }

    componentDidMount() {

        let state = this.state;
        if (state.mounted) {
                this.shuffle();
                
                state.players["Elbow"] = {
                    "username": "Elbow",
                    "snarkList": 51,
                    "buildList_1": 50,
                    "buildList_2": 49,
                    "buildList_3": 48,
                    "buildList_4": 47,
                    "flag": true
                }
                state.scores["Elbow"] = ["Elbow", 52];
        }

        state["mounted"] = true;
        this.setState(state);
    }

    confirmSelection = (deck, deck2) => {

        let state = this.state;
        var old_deck = state.selected_deck
        var new_deck = state.selected;

        for (let i = 0; i < new_deck.length; i += 1) {
            new_deck[i][this.readProp("selected")] = 0;
            new_deck[i][this.readProp("deck")] = this.readDeck(deck, 0)
        }

        var old_deck_1 = state[old_deck].slice(0, state.selection_index);
        var old_deck_2 = state[old_deck].slice(state.selection_index + new_deck.length);
        state[old_deck] = old_deck_1.concat(old_deck_2);

        state.selected = [];

        if (state[old_deck].length > 0) {
            state[old_deck][state[old_deck].length - 1][this.readProp("faceUp")] = 1;
        }

        if (old_deck === "drawList") {
            state.draw_index -= 1;

            if (this.state.drawList.length < 4) {
                state.last_3_draw = true;
            }
        }

        if (deck === "middleList") {
            state[deck][deck2] = state[deck][deck2].concat(new_deck)
            let curScore = state["score"]
            state["score"] = curScore + 1
            if (this.state[deck][deck2].length === 13) {
                state[deck][deck2] = [];
            }

        } else {
            state[deck] = state[deck].concat(new_deck);
        }

        if (old_deck === "snarkList") {
            if (state[old_deck].length === 0) {

                let state = this.state
                state.snarker = 'Me';
                state.scores = {'Me': ["Me", this.state.score],
                'Elbow': ["Elbow", -52]}
                state.gameOver = true
                this.setState(state)
            }
        }

        this.setState(state);
    }

    cancelSelection = () => {
        let state = this.state;
        let deck = state.selected_deck;

        for (let i = state.selection_index; i < state.selection_index + this.state.selected.length; i += 1) {
            state[deck][i][this.readProp("selected")] = 0;
        }

        state["selected"] = [];
        state["selected_deck"] = [];
        this.setState(state);
    }

    selectCard = (start, end, deck) => {
        let state = this.state;
        var selectedCards = state[deck].slice(start, end);

        for (let i = start; i < end; i += 1) {
            state[deck][i][this.readProp("selected")] = 1;
        }

        state["selected"] = selectedCards;
        state["selection_index"] = start;
        state["selected_deck"] = deck;
        this.setState(state);
    }

    snarkClickCard = (deck, index) => {
        if (this.state.selected.length === 0) {
            this.selectCard(index, index + 1, deck);
        } else {
            this.cancelSelection();
        }

    }

    drawCard = () => {
        let state = this.state;

        if (this.state.draw_index === this.state.drawList.length - 1) {
            state.draw_index = -1;
        }
        else {
            var shift = 3;
            if (this.state.drawList.length - this.state.draw_index < 4) {
                shift = this.state.drawList.length - this.state.draw_index - 1;
            }
            state.draw_index += shift
        }

        this.setState(state);
    }

    drawClickCard = (deck, index) => {
        if (this.state.selected.length === 0) {
            this.selectCard(index, index + 1, deck);
        } else {
            this.cancelSelection();
        }

    }

    emptyBuildClickCard = (deck, index) => {
        if (this.state.selected.length !== 0 && this.readCard(this.state.selected[0]).number === 13) {
            this.confirmSelection(deck);
        } else {
            this.cancelSelection();
        }
    }

    buildClickCard = (deck, index) => {

        if (this.state.selected.length === 0) {
            this.selectCard(index, this.state[deck].length, deck);
        } else {
            var target = this.readCard(this.state[deck][index]);
            var arrow = this.readCard(this.state.selected[0]);

            if ((index < this.state[deck].length - 1)
                || target.color === arrow.color
                //|| target.deck === arrow.deck
                //! TESTING COMPROMISE
                || target.number !== arrow.number + 1
            ) {
                this.cancelSelection();
            } else {
                this.confirmSelection(deck);


            }
        }
    }

    emptyMiddleClickCard = (deck, index) => {
        var selectedCards = this.state.selected;
        if (selectedCards.length === 1
            && this.readCard(selectedCards[0]).number === 1) {
            this.confirmSelection("middleList", deck)
        } else {
            this.cancelSelection();
        }
    }

    middleClickCard = (deck, index) => {
        var selectedCards = this.state.selected;

        if (selectedCards.length === 1) {
            var target = this.readCard(this.state["middleList"][deck][this.state["middleList"][deck].length - 1]);
            var arrow = this.readCard(this.state.selected[0]);

            if ((target.suit === arrow.suit
                && target.number === arrow.number - 1)) {
                this.confirmSelection("middleList", deck);

            }
            else {
                this.cancelSelection();
            }

        }
    }


    waveFlag = () => {
        let state = this.state;

        if (this.state.flag === true) {
            state["flag"] = false;
            this.setState(state);

        } else {
            state["flag"] = true;
            this.setState(state);
        }
    }

    render() {

        return (
            <>
                <div  >
                    <div
                        className={classes.overlay}
                        style={{
                            visibility: this.state.viewRules ? 'visible' : 'hidden',
                            height: '44rem',
                            width: '100%'
                        }}
                    ></div>
                    <div
                        className={classes.game_page}
                        style={{
                            height: '44rem',
                            width: '100%',
                        }}
                    >
                        <div className={classes.table_elements}>
                            
                            <HStack alignItems={"start"} marginLeft={5} marginTop={'15px'}>
                                <Box marginRight={7}>
                                    <div className={classes.title} >
                                        SNARK
                                    </div>
                                </Box>
                                <Box>
                                    <Button
                                        colorScheme="red"
                                        size="md"
                                        onClick={() => {
                                            let state = this.state;

                                            if (this.state.viewRules === true) {
                                                state.viewRules = false;
                                            } else {
                                                state.viewRules = true;
                                            }
                                            this.setState(state)
                                        }}
                                    >
                                        Review Rules
                                    </Button>
                                </Box>
                                <Box
                                    marginLeft={20}
                                    zIndex={this.showRule('score') ? 20 : 0}
                                >
                                    <div className={classes.score}>
                                        {this.state.snarkList.length}
                                    </div>

                                </Box>

                                <Box
                                    zIndex={this.showRule('flag') ? 20 : 0}
                                >
                                    <IconButton
                                        marginTop={'-10px'}
                                        marginLeft={'20px'}
                                        variant={(this.state.flag === true) ? 'solid' : 'transparent'}
                                        backgroundColor={(this.state.flag === true) ? '#5c36cf' : ''}
                                        padding={'12px'}
                                        isRound={true}
                                        width={'60px'}
                                        height={'60px'}
                                        onClick={this.waveFlag}
                                        _hover={(this.state.flag === true) ? { bg: "#5c36cf" } : { bg: "#5c36cf" }}
                                    >
                                        <Image
                                            src={flag}
                                        >
                                        </Image>
                                    </IconButton>
                                </Box>
                            </HStack>
                            <VStack height={'100%'} borderColor={'red'}>

                            <HStack
                                alignItems="start">
                                <Spacer />
                                <Box>
                                    <Grid
                                        templateColumns='repeat(5, 1fr)'
                                        gap={0}
                                        marginTop={0}>
                                        <GridItem
                                            colSpan={1}
                                                zIndex={this.showRule('snark') ? 20 : 0}
                                        >
                                            
                                            <Snark
                                                snarkList={this.state.snarkList}
                                                clickCard={this.snarkClickCard}
                                                readCard={this.readCard}
                                                readProp={this.readProp}
                                            />
                                            
                                        </GridItem>
                                        <GridItem 
                                            colSpan={3} 
                                            zIndex={this.showRule('draw') ? 20 : 0}
                                        >
                                            <Draw
                                                drawList={this.state.drawList}
                                                clickCard={this.drawClickCard}
                                                drawCard={this.drawCard}
                                                drawIndex={this.state.draw_index}
                                                last3Draw={this.state.last_3_draw}
                                                readCard={this.readCard}
                                                readProp={this.readProp}
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1} />

                                    </Grid>
                                    <Grid
                                        templateColumns='repeat(5, 1fr)'
                                        gap={3}
                                        marginTop={3}

                                    >
                                        <GridItem
                                            zIndex={this.showRule('build') ? 20 : 0}
                                        >
                                            <Build
                                                buildList={this.state.buildList_1}
                                                clickCard={this.buildClickCard}
                                                emptyClickCard={this.emptyBuildClickCard}
                                                deck={"buildList_1"}
                                                readCard={this.readCard}
                                                readProp={this.readProp}

                                            />
                                        </GridItem>

                                        <GridItem
                                            zIndex={this.showRule('build') ? 20 : 0}
                                        >
                                            <Build buildList={this.state.buildList_2}
                                                clickCard={this.buildClickCard}
                                                emptyClickCard={this.emptyBuildClickCard}
                                                deck={"buildList_2"}
                                                readCard={this.readCard}
                                                readProp={this.readProp}

                                            />
                                        </GridItem>

                                        <GridItem
                                            zIndex={this.showRule('build') ? 20 : 0}
                                        >
                                            <Build buildList={this.state.buildList_3}
                                                clickCard={this.buildClickCard}
                                                emptyClickCard={this.emptyBuildClickCard}
                                                deck={"buildList_3"}
                                                readCard={this.readCard}
                                                readProp={this.readProp}

                                            />
                                        </GridItem>

                                        <GridItem
                                            zIndex={this.showRule('build') ? 20 : 0}
                                        >
                                            <Build buildList={this.state.buildList_4}
                                                clickCard={this.buildClickCard}
                                                emptyClickCard={this.emptyBuildClickCard}
                                                deck={"buildList_4"}
                                                readCard={this.readCard}
                                                readProp={this.readProp}
                                            />
                                        </GridItem>
                                        <GridItem />

                                    </Grid>
                                </Box>
                                <Box 
                                zIndex={this.showRule('middle') ? 20 : 0}
                                >
                                    <Opponent
                                        players={this.state.players}
                                        username={"Me"} 
                                        readCard={this.readCard}
                                        // zIndex={this.showRule('opponent') ? 20 : 0}
                                        />

                                    <Box
                                            zIndex={this.showRule('middle') ? 20 : 0}>
                                        <Mat
                                            clickCard={this.middleClickCard}
                                            emptyClickCard={this.emptyMiddleClickCard}
                                            middleList={this.state.middleList}
                                            numPlayers={1}
                                            readCard={this.readCard}
                                            readProp={this.readProp}
                                        />
                                    </Box>
                                </Box>
                                <div style={{ width: '10' }}></div>
                                
                                <Spacer />
                            </HStack>
                            <Spacer/>
                            <HStack zIndex={20} >
                                <Spacer/>
                                <IconButton
                                visibility={this.state.viewRules ? 'visible' : 'hidden'}
                                variant={(this.state.ruleSlide > 0) ? 'solid' : 'outline'}
                                disabled={(this.state.ruleSlide > 0) ? false : true}
                                icon={<ChevronLeftIcon
                                            color='red.500' 
                                            />}
                                isRound={true}
                                onClick={()=>{
                                    let state = this.state;
                                    state.ruleSlide = state.ruleSlide - 1;
                                    this.setState(state); 
                                }}
                                />
                                <IconButton 
                                visibility={this.state.viewRules ? 'visible' : 'hidden'}
                                variant={(this.state.ruleSlide < 5) ? 'solid' : 'outline'}
                                disabled={(this.state.ruleSlide < 5) ? false : true}
                                icon={<ChevronRightIcon 
                                            color='red.500' />} 
                                isRound={true}
                                onClick={() => {
                                    let state = this.state;
                                    state.ruleSlide = state.ruleSlide + 1;
                                    this.setState(state);
                                }}
                                />
                                <Spacer />
                            </HStack>
                            <Button
                            visibility={this.showRule('button') ? 'visible' : 'hidden'}
                            zIndex={20}
                            colorScheme='red'
                            onClick={()=>{
                                let state = this.state;
                                state.viewRules = false;
                                state.ruleSlide = 0;
                                this.setState(state);
                            }}
                            >
                                Test it out!
                            </Button>
                            <Rules
                                component={this.rulesOrder[this.state.ruleSlide]}
                                visibility={this.state.viewRules}
                            />
                            </VStack>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}

export default Tutorial;

