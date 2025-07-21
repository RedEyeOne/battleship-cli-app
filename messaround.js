import {generateBoardMap, printBoard} from './gamefiles/printTable.js'
import {makeBoardData, placeShip} from './gamefiles/ships.js';
import {startGame ,winCondition, makeGuess} from './gamefiles/gameLogic.js';


// main 
let size = startGame();

let board = makeBoardData(size);

let boardMap = generateBoardMap(size);

if (size === '4') {
  board = placeShip(board, 3, 1);
  board = placeShip(board, 2, 1);
}
if (size === '5') {
  board = placeShip(board, 3, 1);
  board = placeShip(board, 2, 2);
}
if (size === '6') {
  board = placeShip(board, 3, 2);
  board = placeShip(board, 2, 2);
}

printBoard(board, true);

while (!winCondition(board)) {
  makeGuess(board, boardMap);
  printBoard(board,false);
}

const banner = `
========
__   _______ _   _   _    _ _____ _   _
\\ \\ / /  _  | | | | | |  | |_   _| \\ | |
 \\ V /| | | | | | | | |  | | | | |  \\| |
  \\ / | | | | | | | | |/\\| | | | | . ' |
  | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
  \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
========
`;

console.log(banner);



// reference board

// const board = [
//   [
//     { type: "large", id: 1, hit: false }, // A0
//     { type: "small", id: 2, hit: true }, // A1
//     { type: "small", id: 2, hit: false }, // A2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // B0
//     { type: "empty", hit: false }, // B1
//     { type: "empty", hit: true }, // B2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // C0
//     { type: "empty", hit: false }, // C1
//     { type: "empty", hit: false }, // C2
//   ],
// ];