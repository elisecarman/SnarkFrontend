import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Grid, GridItem, Image, IconButton, Button, Spacer, HStack, Box, VStack, Textarea, Modal, ModalOverlay, ModalContent} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useChannelStateContext } from 'stream-chat-react'
import classes from '../styles/game.module.css'
import Build from './Build'
import Draw from './Draw'
import Snark from './Snark'
import Mat from './Mat'
import Opponent from './Opponent'
import Loading from '../../onboard/Loading'
import Cookies from 'universal-cookie';
import Win from './Win'
import Tutorial from './Tutorial'

import { redirect, useParams } from 'react-router-dom'
import { ColorContext } from '../../context/colorcontext'

import table from "../../assets/table.png"
import mat from "../../assets/mat.png"
import flag from "../../assets/peace.png"
import mug from "../../assets/mug.PNG"
import candle from "../../assets/candle.PNG"
import logo2 from "../../assets/logo2.png"




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

import h1 from "../../assets/icons/hearts/h1.png"
import h2 from "../../assets/icons/hearts/h2.png"
import h3 from "../../assets/icons/hearts/h3.png"
import h4 from "../../assets/icons/hearts/h4.png"
import h5 from "../../assets/icons/hearts/h5.png"
import h6 from "../../assets/icons/hearts/h6.png"
import h7 from "../../assets/icons/hearts/h7.png"
import h8 from "../../assets/icons/hearts/h8.png"
import h9 from "../../assets/icons/hearts/h9.png"
import h10 from "../../assets/icons/hearts/h10.png"
import h11 from "../../assets/icons/hearts/h11.png"
import h12 from "../../assets/icons/hearts/h12.png"
import h13 from "../../assets/icons/hearts/h13.png"

import d1 from "../../assets/icons/diamonds/d1.png"
import d2 from "../../assets/icons/diamonds/d2.png"
import d3 from "../../assets/icons/diamonds/d3.png"
import d4 from "../../assets/icons/diamonds/d4.png"
import d5 from "../../assets/icons/diamonds/d5.png"
import d6 from "../../assets/icons/diamonds/d6.png"
import d7 from "../../assets/icons/diamonds/d7.png"
import d8 from "../../assets/icons/diamonds/d8.png"
import d9 from "../../assets/icons/diamonds/d9.png"
import d10 from "../../assets/icons/diamonds/d10.png"
import d11 from "../../assets/icons/diamonds/d11.png"
import d12 from "../../assets/icons/diamonds/d12.png"
import d13 from "../../assets/icons/diamonds/d13.png"

import c1 from "../../assets/icons/clubs/c1.png"
import c2 from "../../assets/icons/clubs/c2.png"
import c3 from "../../assets/icons/clubs/c3.png"
import c4 from "../../assets/icons/clubs/c4.png"
import c5 from "../../assets/icons/clubs/c5.png"
import c6 from "../../assets/icons/clubs/c6.png"
import c7 from "../../assets/icons/clubs/c7.png"
import c8 from "../../assets/icons/clubs/c8.png"
import c9 from "../../assets/icons/clubs/c9.png"
import c10 from "../../assets/icons/clubs/c10.png"
import c11 from "../../assets/icons/clubs/c11.png"
import c12 from "../../assets/icons/clubs/c12.png"
import c13 from "../../assets/icons/clubs/c13.png"

import s1 from "../../assets/icons/spades/s1.png"
import s2 from "../../assets/icons/spades/s2.png"
import s3 from "../../assets/icons/spades/s3.png"
import s4 from "../../assets/icons/spades/s4.png"
import s5 from "../../assets/icons/spades/s5.png"
import s6 from "../../assets/icons/spades/s6.png"
import s7 from "../../assets/icons/spades/s7.png"
import s8 from "../../assets/icons/spades/s8.png"
import s9 from "../../assets/icons/spades/s9.png"
import s10 from "../../assets/icons/spades/s10.png"
import s11 from "../../assets/icons/spades/s11.png"
import s12 from "../../assets/icons/spades/s12.png"
import s13 from "../../assets/icons/spades/s13.png"

const socket = require('../../connection/socket').socket
const cookies = new Cookies();

// export default 
export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // gameState: new Game(this.props.color),
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
            // logged_out: p,
            snarker: "",
            scores: {},
            gameOver: false,
            flag: false,
            viewRules: false,
            ruleSlide: 0
        }
    };

    reference_cards = [
        { suit: "spades", number: 1, color: "black", icon:s1 , sprite: spade1 },
        { suit: "spades", number: 2, color: "black", icon:s2 , sprite: spade2 },
        { suit: "spades", number: 3, color: "black", icon:s3 , sprite: spade3 },
        { suit: "spades", number: 4, color: "black", icon:s4 , sprite: spade4 },
        { suit: "spades", number: 5, color: "black", icon:s5 , sprite: spade5 },
        { suit: "spades", number: 6, color: "black", icon:s6 , sprite: spade6 },
        { suit: "spades", number: 7, color: "black", icon:s7 , sprite: spade7 },
        { suit: "spades", number: 8, color: "black", icon:s8 , sprite: spade8 },
        { suit: "spades", number: 9, color: "black", icon:s9 , sprite: spade9 },
        { suit: "spades", number: 10, color: "black", icon:s10 , sprite: spade10 },
        { suit: "spades", number: 11, color: "black", icon:s11 , sprite: spade11 },
        { suit: "spades", number: 12, color: "black", icon:s12 , sprite: spade12 },
        { suit: "spades", number: 13, color: "black", icon:s13 , sprite: spade13 },

        { suit: "clubs", number: 1, color: "black", icon: c1 , sprite: club1 },
        { suit: "clubs", number: 2, color: "black", icon: c2 , sprite: club2 },
        { suit: "clubs", number: 3, color: "black", icon: c3 , sprite: club3 },
        { suit: "clubs", number: 4, color: "black", icon: c4 , sprite: club4 },
        { suit: "clubs", number: 5, color: "black", icon: c5 , sprite: club5 },
        { suit: "clubs", number: 6, color: "black", icon: c6 , sprite: club6 },
        { suit: "clubs", number: 7, color: "black", icon: c7 , sprite: club7 },
        { suit: "clubs", number: 8, color: "black", icon: c8 , sprite: club8 },
        { suit: "clubs", number: 9, color: "black", icon: c9 , sprite: club9 },
        { suit: "clubs", number: 10, color: "black", icon: c10 , sprite: club10 },
        { suit: "clubs", number: 11, color: "black", icon: c11 , sprite: club11 },
        { suit: "clubs", number: 12, color: "black", icon: c12 , sprite: club12 },
        { suit: "clubs", number: 13, color: "black", icon: c13 , sprite: club13 },

        { suit: "diamonds", number: 1, color: "red", icon: d1 , sprite: diamond1 },
        { suit: "diamonds", number: 2, color: "red", icon: d2 , sprite: diamond2 },
        { suit: "diamonds", number: 3, color: "red", icon: d3 , sprite: diamond3 },
        { suit: "diamonds", number: 4, color: "red", icon: d4 , sprite: diamond4 },
        { suit: "diamonds", number: 5, color: "red", icon: d5 , sprite: diamond5 },
        { suit: "diamonds", number: 6, color: "red", icon: d6 , sprite: diamond6 },
        { suit: "diamonds", number: 7, color: "red", icon: d7 , sprite: diamond7 },
        { suit: "diamonds", number: 8, color: "red", icon: d8 , sprite: diamond8 },
        { suit: "diamonds", number: 9, color: "red", icon: d9 , sprite: diamond9 },
        { suit: "diamonds", number: 10, color: "red", icon: d10 , sprite: diamond10 },
        { suit: "diamonds", number: 11, color: "red", icon: d11 , sprite: diamond11 },
        { suit: "diamonds", number: 12, color: "red", icon: d12 , sprite: diamond12 },
        { suit: "diamonds", number: 13, color: "red", icon: d13 , sprite: diamond13 },

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
        if (lightCard === undefined){
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

        cookies.set("buildList_1", JSON.stringify(state["buildList_1"]), { path: '/' });
        cookies.set("buildList_2", JSON.stringify(state["buildList_2"]), { path: '/' });
        cookies.set("buildList_3", JSON.stringify(state["buildList_3"]), { path: '/' });
        cookies.set("buildList_4", JSON.stringify(state["buildList_4"]), { path: '/' });
        cookies.set("snarkList", JSON.stringify(state["snarkList"]), { path: '/' });
        cookies.set("drawList", JSON.stringify(state["drawList"]), { path: '/' });
        cookies.set("middleList", JSON.stringify(state["middleList"]), { path: '/' }); 
    }

    recoverCookies = () => {
        let state = this.state;

        state["buildList_1"] = (cookies.get("buildList_1"));
        state["buildList_2"] = (cookies.get("buildList_2"));
        state["buildList_3"] = (cookies.get("buildList_3"));
        state["buildList_4"] = (cookies.get("buildList_4"));
        state["snarkList"] = (cookies.get("snarkList"));
        state["drawList"] = (cookies.get("drawList"));
        state["middleList"] = (cookies.get("middleList"));

        state["draw_index"] = parseInt(cookies.get("draw_index"));
        state["score"] = parseInt(cookies.get("score"));
        state["last_3_draw"] = cookies.get("last_3_draw");

        state["players"] = cookies.get('players');
        state["flag"] = cookies.get('flag');


        let scores = cookies.get("scores");
        let snarker = cookies.get("snarker");
        let gameOver = cookies.get("gameOver");

        state["scores"] = (scores === undefined) ? {} : scores
        state["snarker"] = (snarker === undefined) ? "" : snarker
        state["gameOver"] = (gameOver === undefined) ? false : gameOver

        this.setState(state);
    }

    componentDidMount() {
        
        let state = this.state;
        if (state.mounted) {
            const shuffled = cookies.get("shuffled");
            if (shuffled !== undefined ){
                socket.emit('logout',
                    {
                        gameId: this.props.gameId,
                        username: this.props.myUserName,
                        id: this.props.id
                    });
               
            } 
            else
            {
                this.shuffle();
                cookies.set("draw_index", -1,  { path: '/' });
                cookies.set("score", 0,  { path: '/' });
                cookies.set("last_3_draw", false,  { path: '/' });
                cookies.set("shuffled", true, { path: '/' });
                cookies.set("gameId", this.props.gameId, { path: '/' });
                cookies.set("flag", false, { path: '/' });
                //! TESTING: MAX PLAYERS
                // state.players["Jax"] = {"snarkList": 1,
                //                         "buildList_1": 2,
                //                         "buildList_2": 3,
                //                         "buildList_3": 4,
                //                         "buildList_4": 5}
                // state.scores["Jax"] = 10;

                // state.players["Elbow"] = {
                //     "snarkList": 1,
                //     "buildList_1": 2,
                //     "buildList_2": 3,
                //     "buildList_3": 4,
                //     "buildList_4": 5
                // }
                // state.scores["Elbow"] = 60;

                // state.players["Crapouille"] = {
                //     "snarkList": 1,
                //     "buildList_1": 2,
                //     "buildList_2": 3,
                //     "buildList_3": 4,
                //     "buildList_4": 5
                // }
                // state.scores["Crapouille"] = 1;

                // state.players["Crayon"] = {
                //     "snarkList": 1,
                //     "buildList_1": 2,
                //     "buildList_2": 3,
                //     "buildList_3": 4,
                //     "buildList_4": 5
                // }
                // state.scores["Crayon"] = 11;

                // state.players["Scallion"] = {
                //     "snarkList": 1,
                //     "buildList_1": 2,
                //     "buildList_2": 3,
                //     "buildList_3": 4,
                //     "buildList_4": 5
                // }
                // state.scores["Scallion"] = -1;

                socket.emit("shuffled",
                    {
                        "gameId": this.props.gameId,
                        "username": this.props.myUserName,
                        "id": this.props.id,
                        "buildList_1": this.state.buildList_1[0][0],
                        "buildList_2": this.state.buildList_2[1][0],
                        "buildList_3": this.state.buildList_3[2][0],
                        "buildList_4": this.state.buildList_4[3][0],
                        "snarkList": this.state.snarkList[9][0]
                    })
            }

            socket.on('repeat shuffled', data => {
                if ((data.gameId === this.props.gameId) &&
                    (data.id !== this.props.id))
                {
                    this.repeatShuffled(data);
                }
            })

            socket.on('opponent move', move => {
                if (move.gameId === this.props.gameId) {

                if (move.id !== this.props.id) {
                    let state2 = this.state;
                    state2["middleList"][move.deckName] = move.deck;
                    this.setState(state2);
                    cookies.remove("middleList");
                    cookies.set("middleList", JSON.stringify(state2["middleList"]), { path: '/' })
                }
                }
            })

            socket.on('top card change', move => {
                if (move.gameId === this.props.gameId) {
                if ((move.id in this.state.players)) {
                    let decks = Object.keys(move.opponentDisplay);
                    let state2 = this.state;

                    for (let i = 0; i < decks.length; i++) {
                        
                        state2.players[move.id][decks[i]] = move.opponentDisplay[decks[i]]
                    }

                    this.setState(state2)
                    cookies.set('players', JSON.stringify(state2.players), { path: '/' })
                }
                }
            })

            socket.on('logout', this.logout);

            socket.on('opponent shuffled', (data) => {
                
                console.log('opponent shuffled');
                console.log(data);
                if (data.gameId === this.props.gameId) {
                if ((data.id !== this.props.id) && ((data.id in this.state.players) === false)) {
                    let state2 = this.state;
                    state2.players[data.id] = {
                        "username": data.username,
                        "snarkList": data.snarkList,
                        "buildList_1": data.buildList_1,
                        "buildList_2": data.buildList_2,
                        "buildList_3": data.buildList_3,
                        "buildList_4": data.buildList_4,
                        "flag": false
                    }
                    this.setState(state2);
                    cookies.set('players', JSON.stringify(state2.players), { path: '/' })
                    
                }
                }
            })

            socket.on('score request', data => {

                if (data.gameId === this.props.gameId) {

                let state2 = this.state;
                state2.snarker = data.snarker
                cookies.set('snarker', data.snarker, {path:'/'})
                this.setState(state2)

                socket.emit('score submission', {
                    gameId: this.props.gameId,
                    username: this.props.myUserName,
                    id: this.props.id,
                    score: this.state.score - (this.state.snarkList.length * 2)})
                }
            })

            socket.on('score compilation', data => {
                if (data.gameId === this.props.gameId) {
                if (this.props.isCreator){

                    let state2 = this.state;
                    state2.scores[data.id] = [data.username, data.score];
                    cookies.set('scores', JSON.stringify(state2.scores), {path: '/'})
                    this.setState(state2);

                    if (Object.keys(state2.scores).length === (Object.keys(state2.players).length + 1)){
                        socket.emit('score final', {
                            scores: state2.scores, 
                            gameId: this.props.gameId,
                            id: this.props.id,
                        })
                        
                    }
                }
                }
            })

            socket.on('score final', data => {
                if (data.gameId === this.props.gameId) {

                let state2 = this.state;
                state2.scores = data.scores;
                state2.gameOver = true;

                cookies.set('scores', JSON.stringify(state2.scores), { path: '/' });
                cookies.set('gameOver', true, {path: '/'});
                this.setState(state2);
                }
                
            })

            socket.on('wave flag', data => {
                if (data.gameId === this.props.gameId) {
                    if (data.id !== this.props.id)
                    {
                        let state2 = this.state;
                        state2.players[data.id].flag = true;
                        cookies.set('players', JSON.stringify(state2.players), { path: '/' })
                        this.setState(state2);
                    }

                    if (this.props.isCreator && (this.state.flag === true)){
                        
                        let total = 0;
                        let players = Object.keys(this.state.players);
                        for (let i = 0; i < (players.length); i ++){
                            if (this.state.players[players[i]].flag === true){
                                total += 1;
                            }
                        }
                        
                        if (total === players.length){
                            socket.emit("snark win", {
                                snarker: "",
                                gameId: this.props.gameId,
                            })
                        }
                    }
                }
            })

            socket.on('down flag', data => {
                if (data.gameId === this.props.gameId) {
                if (data.id !== this.props.id) {
                    let state2 = this.state;
                    state2.players[data.id].flag = false;
                    cookies.set('players', JSON.stringify(state2.players), {path:'/'})
                    this.setState(state2);
                }
                }
            })

            }

        state["mounted"] = true;
        this.setState(state);
    }

    confirmSelection = (deck, deck2) => {

        let state = this.state;
        var old_deck = state.selected_deck
        var new_deck = state.selected;
        var opponentDisplay = {}

        for (let i = 0; i < new_deck.length; i += 1) {
            new_deck[i][this.readProp("selected")] = 0;
            new_deck[i][this.readProp("deck")] = this.readDeck(deck,0)
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
            cookies.remove("draw_index");
            cookies.set("draw_index", state.draw_index, { path: '/' })

            if (this.state.drawList.length < 4) {
                state.last_3_draw = true;
                cookies.remove("last_3_draw");
                cookies.set("last_3_draw", true, { path: '/' })
            }
        }

        if (deck === "middleList") {
            state[deck][deck2] = state[deck][deck2].concat(new_deck)
            let curScore = state["score"]

            state["score"] = curScore + 1
            // cookies.remove("score");
            cookies.set("score", state["score"], { path: '/' })

            if (this.state[deck][deck2].length === 13) {
                state[deck][deck2] = [];
            }

            socket.emit('new move', {
                deckName: deck2,
                deck: state[deck][deck2],
                userName: this.props.myUserName,
                id: this.props.id,
                gameId: this.props.gameId
            })


        } else {
            state[deck] = state[deck].concat(new_deck);

        }

        if (old_deck === "snarkList"){
            //! TESTING COMPROMISE
            if (state[old_deck].length === 0){
                socket.emit("snark win", { 
                    snarker: this.props.myUserName,
                    gameId: this.props.gameId
                })
            }
        }


        this.setState(state);

        // HANDLING TOP CARD CHANGES FOR OTHER PLAYERS' OPPONENT DISPLAY

        if (old_deck === "buildList_1" ||
            old_deck === "buildList_2" ||
            old_deck === "buildList_3" ||
            old_deck === "buildList_4" ||
            old_deck === "snarkList"
        ) {
            const last = state[old_deck].length - 1;
            if (last === -1){

                opponentDisplay[old_deck] = -1
            } else{
                opponentDisplay[old_deck] = state[old_deck][last][0];

            }
        }

        if (deck === "buildList_1" ||
            deck === "buildList_2" ||
            deck === "buildList_3" ||
            deck === "buildList_4" ||
            deck === "snarkList"
        ) {
            const last = state[deck].length - 1;
            if (last === -1) {
                opponentDisplay[deck] = -1
            }else{
                opponentDisplay[deck] = state[deck][last][0];

            }
        }

        if (Object.keys(opponentDisplay).length !== 0){
            socket.emit('top card change', {
                'userName': this.props.myUserName,
                "id": this.props.id,
                'gameId' : this.props.gameId,
                'opponentDisplay': opponentDisplay
            })
        }

        // UPDATING COOKIES

        cookies.remove(deck);
        cookies.remove(old_deck);

        cookies.set(deck, JSON.stringify(state[deck]), { path: '/' });
        cookies.set(old_deck, JSON.stringify(state[old_deck]), { path: '/' });

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
        cookies.set("draw_index", state.draw_index, { path: '/' })

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
                console.log("canceled");
            } else {
                this.confirmSelection(deck);
                console.log("confirmed");


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

            if ( (target.suit === arrow.suit
                && target.number === arrow.number - 1)) {
                this.confirmSelection("middleList", deck);

            }
            else {
                this.cancelSelection();
            }

        }
    }

    logout = (data) => {
        if (data.gameId === this.props.gameId) {

        console.log("logout");
        this.props.logOut(true);

        cookies.remove("username", { path: '/' });
        cookies.remove("buildList_1", { path: '/' });
        cookies.remove("buildList_2", { path: '/' });
        cookies.remove("buildList_3", { path: '/' });
        cookies.remove("buildList_4", { path: '/' });
        cookies.remove("snarkList", { path: '/' });
        cookies.remove("drawList", { path: '/' });
        cookies.remove("middleList", { path: '/' });
        cookies.remove("draw_index", { path: '/' });
        cookies.remove("score", { path: '/' });
        cookies.remove("last_3_draw", { path: '/' });
        cookies.remove("shuffled", { path: '/' });
        cookies.remove("mounted", { path: '/' });
        cookies.remove("gameStarted", { path: '/' })
        cookies.remove("isCreator", { path: '/' });
        cookies.remove("gameId", { path: '/' });
        cookies.remove("players", { path: '/' });
        cookies.remove("scores", { path: '/' });
        cookies.remove("snarker", { path: '/' });
        cookies.remove("gameOver", { path: '/' });
        cookies.remove("flag", { path: '/' });
        cookies.remove("playerArr", {path: '/'});
        cookies.remove("joined", { path: '/' });
        cookies.remove("id", { path: '/' });


        // let state = this.state;
        // state['logged_out'] = true;
        // this.setState(state);

        if (this.props.id !== data.id){
            let message = data.username + ' left the room!';
            alert(message);
        }
        }
    }

    repeatShuffled = () => {
    socket.emit("shuffled",
                {
                    "gameId": this.props.gameId,
                    "username": this.props.myUserName,
                    "id": this.props.id,
                    "buildList_1": this.state.buildList_1[0][0],
                    "buildList_2": this.state.buildList_2[1][0],
                    "buildList_3": this.state.buildList_3[2][0],
                    "buildList_4": this.state.buildList_4[3][0],
                    "snarkList": this.state.snarkList[9][0]
                })
    }

    closeWin = () => {
        let state = this.state;
        state.gameOver = false;
        this.props.logOut(true)
        // state.logged_out = true;
        this.setState(state);

        cookies.remove("username", { path: '/' });
        cookies.remove("buildList_1", { path: '/' });
        cookies.remove("buildList_2", { path: '/' });
        cookies.remove("buildList_3", { path: '/' });
        cookies.remove("buildList_4", { path: '/' });
        cookies.remove("snarkList", { path: '/' });
        cookies.remove("drawList", { path: '/' });
        cookies.remove("middleList", { path: '/' });
        cookies.remove("draw_index", { path: '/' });
        cookies.remove("score", { path: '/' });
        cookies.remove("last_3_draw", { path: '/' });
        cookies.remove("shuffled", { path: '/' });
        cookies.remove("mounted", { path: '/' });
        cookies.remove("gameStarted", { path: '/' })
        cookies.remove("isCreator", { path: '/' });
        cookies.remove("gameId", { path: '/' });
        cookies.remove("players", { path: '/' });
        cookies.remove("scores", { path: '/' });
        cookies.remove("snarker", { path: '/' });
        cookies.remove("gameOver", { path: '/' });
        cookies.remove("flag", { path: '/' });
        cookies.remove("playerArr", { path: '/' });
        cookies.remove("joined", { path: '/' });
        cookies.remove("id", { path: '/' });

    }

    waveFlag = () => {
        let state = this.state;

        if (this.state.flag === true){
            state["flag"] = false;
            cookies.set('flag', false, { path: '/' })
            this.setState(state);
            socket.emit('down flag', { 
                username: this.props.myUserName, 
                id: this.props.id,
                gameId: this.props.gameId })

        } else{
            state["flag"] = true;
            cookies.set('flag', true, {path: '/'})
            this.setState(state);
            socket.emit('wave flag', {
                username: this.props.myUserName, 
                id: this.props.id,
                gameId: this.props.gameId})
        }
    }

    render() {
        // if (this.state.mounted &&
        //     (Object.keys(this.state.players).length !== (this.props.playerArr.length - 1))){
        //         console.log("repeat");
        //         console.log(this.state.players);
        //         console.log(this.props.playerArr);

        //         socket.emit('repeat shuffled',
        //         {
        //             gameId: this.props.gameId,
        //             id: this.props.id,
        //             username: this.props.myUserName
        //         })
        //     }
        return (
            <>
            <Win
                snarker={this.state.snarker}
                scores={this.state.scores}
                open={this.state.gameOver}
                closeWin={this.closeWin}
            />
            
            { (this.props.loggedOut === true) ?
            <div>
                {/* DOMAIN */}
                <Navigate to="/"></Navigate>
            </div>
            :
            <div  >
                <div
                className={classes.overlay}
                style={{
                    visibility: this.state.viewRules ? 'visible' : 'hidden',
                    height: '100vh',
                    width: '100vw'
                }}
                ></div>
                <div 
                className={classes.game_page}
                style={{
                    height: '100vh',
                    width: '100vw',
                }}
                >
                    <div className={classes.table_elements}>
                    <HStack alignItems={"start"} marginLeft={5} marginTop={'15px'}>
                        <Box>
                            <Image
                            marginTop={'-12px'}
                            height='60px'
                            width='60px'
                            src={logo2}
                            />
                        </Box>
                        <Box marginRight={7}>
                            <div className={classes.title} >
                                SNARK
                            </div>
                        </Box>
                        <Box>                    
                            <Button
                                marginLeft={'75px'}
                                colorScheme="red"
                                
                                size="md"
                                onClick={() => {
                                    socket.emit('logout', 
                                    {gameId : this.props.gameId, 
                                    username: this.props.myUserName});
                                }}
                            >
                                {/* <div className={classes.menu}> */}
                                MENU
                                {/* </div> */}
                            </Button>
                        </Box>
                        <Box width={'20px'}></Box>
                        <Box 
                        marginLeft={20} 
                        zIndex={(this.state.viewRules && (this.state.ruleSlide === 0)) ? 20 : 0}
                        >
                            <div className={classes.score}>
                            {this.state.snarkList.length}
                            </div>
                        </Box>    
                        <Box>
                            <IconButton
                            marginTop={'-10px'}
                            marginLeft={'20px'}
                            variant={(this.state.flag === true) ? 'solid':'transparent'}
                            backgroundColor={(this.state.flag === true) ? '#5c36cf' : ''}
                            padding={'12px'}
                            isRound={true}
                            width={'60px'}
                            height={'60px'}
                            onClick={this.waveFlag}
                            _hover={(this.state.flag === true) ? { bg: "#5c36cf" } : {bg: "#5c36cf" }}
                            >
                            <Image 
                            src={flag} 
                            >
                            </Image>
                            </IconButton>
                        </Box>
                    </HStack>
                    
                    <HStack
                        alignItems="start">
                        <Spacer/>
                        
                    <Box>
                        <Grid
                            templateColumns='repeat(5, 1fr)'
                            gap={0}
                            marginTop={0}>
                            <GridItem 
                            colSpan={1} 
                            zIndex= {(this.state.viewRules && (this.state.ruleSlide === 0)) ? 20 : 0}
                            marginTop={'5px'}
                            >
                                <Snark
                                    snarkList={this.state.snarkList}
                                    clickCard={this.snarkClickCard}
                                    readCard={this.readCard}
                                    readProp={this.readProp}
                                />
                            </GridItem>
                            <GridItem colSpan={3} >
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
                            <GridItem>
                                <Build
                                    buildList={this.state.buildList_1}
                                    clickCard={this.buildClickCard}
                                    emptyClickCard={this.emptyBuildClickCard}
                                    deck={"buildList_1"}
                                    readCard={this.readCard}
                                    readProp={this.readProp}

                                />
                            </GridItem>

                            <GridItem>
                                <Build buildList={this.state.buildList_2}
                                    clickCard={this.buildClickCard}
                                    emptyClickCard={this.emptyBuildClickCard}
                                    deck={"buildList_2"}
                                    readCard={this.readCard}
                                    readProp={this.readProp}

                                />
                            </GridItem>

                            <GridItem>
                                <Build buildList={this.state.buildList_3}
                                    clickCard={this.buildClickCard}
                                    emptyClickCard={this.emptyBuildClickCard}
                                    deck={"buildList_3"}
                                    readCard={this.readCard}
                                    readProp={this.readProp}

                                />
                            </GridItem>

                            <GridItem>
                                <Build buildList={this.state.buildList_4}
                                    clickCard={this.buildClickCard}
                                    emptyClickCard={this.emptyBuildClickCard}
                                    deck={"buildList_4"}
                                    readCard={this.readCard}
                                    readProp={this.readProp}

                                />
                            </GridItem>
                            <GridItem/>

                        </Grid>
                    </Box>
                    <Box>
                        <Opponent
                        players={this.state.players}
                        username={this.props.myUserName} 
                        readCard={this.readCard}
                        />

                        <div>
                            <Mat
                            clickCard={this.middleClickCard}
                            emptyClickCard={this.emptyMiddleClickCard}
                            middleList={this.state.middleList}
                            numPlayers={Object.keys(this.props.playerArr).length}
                            readCard={this.readCard}
                            readProp={this.readProp}
                        />
                        </div>
                    </Box>
                        <div style ={{width : '10'}}></div>
                    <Box>
                        
                    </Box>
                    <Spacer />
                    </HStack>
                    {/* 
                    <HStack>
                        <Spacer/>
                        <Box
                        marginTop='-200px'
                        marginRight='20px'>
                            <Image
                            src={candle}
                            height='400px'
                            ></Image>
                        </Box>
                    </HStack>                
                    */}
                    </div>
                </div>
            </div>
            }</>
        )
    };
}






