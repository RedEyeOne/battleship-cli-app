import {printBoard} from './gamefiles/printTable.js'; 
import {makeBoardData} from './gamefiles/boards.js';
import {placeShip} from './gamefiles/boards.js';
import {startGame} from './gamefiles/gameLogic.js';
// const board = [
//   [
//     { type: "large", id: 1, hit: false }, // Represents position A0
//     { type: "small", hit: false }, // Represents position A1
//     { type: "small", hit: false }, // Represents position A2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // Represents position B0
//     { type: "empty", hit: false }, // Represents position B1
//     { type: "empty", hit: false }, // Represents position B2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // Represents position C0
//     { type: "empty", hit: false }, // Represents position C1
//     { type: "empty", hit: false }, // Represents position C2
//   ],
// ];  
let board = makeBoardData(5);

startGame();