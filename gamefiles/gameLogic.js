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
    console.log('Welcome to Battleship 🚢');
    let sizeDecided = false;
    let size = readlineSync.question('Choose a Board Size \n 4 - 5 - 6');

    while (!sizeDecided) {
        let size = readlineSync.question('Choose a Board Size \n 4 - 5 - 6');
        if (sizes.includes(Number(size))) sizeDecided = true;
    }
}