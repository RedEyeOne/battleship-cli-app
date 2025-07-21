import readlineSync from 'readline-sync';

export function winCondition(board) {
    for (let row of board) {
        for (let cell of row) {
            if (cell.type !== "empty" && cell.hit === false) {
                return false; // There's still a ship part not hit
            }
        }
    }
    return true; // All ships are hit
}

export function startGame() {
    let sizes =  [4, 5, 6]
    let size;
    console.log('Welcome to Battleship 🚢');
    let sizeDecided = false;

    while (!sizeDecided) {
        size = readlineSync.question('Choose a Board Size \n 4 - 5 - 6 \n Answer: ');
        if (sizes.includes(Number(size))) sizeDecided = true;
    }
    return size;
}

export function makeGuess(board, boardMap)  {
    let guess = readlineSync.question('Commander, what cordinates shall we lauch the missiles?: ').toLowerCase().replace(/\s/g, '');
    let coordinates = boardMap[guess];
    if (!coordinates) {
        console.log("⚠️ Invalid coordinates. Try again.");
        return makeGuess(board, boardMap); // Ask again 
    }
    let [row, col] = coordinates;
    console.clear();
    board[col][row].hit = true;
      const letters = 'abcdefghijklmnopqrstuvwxyz';

    console.log(`Firing missiles at ${letters[row].toUpperCase(git)}${col}`);
}