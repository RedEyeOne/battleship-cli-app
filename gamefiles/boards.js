export function makeBoardData (number) {
    let board = [];
        for (let col = 0; col < number; col++) {
            let colData = []
            for (let row = 0; row < number; row++) {
                colData.push({ type: "empty", hit: false });
            }
            board.push(colData);
        }
        return board;
}

export function placeShip (board, shipSize, quantity) {
    let startingPoint;
    for (let number in quantity) {
        let orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        if (orientation === 'horizontal') {
            let row = Math.floor(Math.random() * board[0].length);
            let col = Math.floor(Math.random() * board[0][0]);
        }
        else if (orientation === 'vertical') {
            let row = Math.floor(Math.random() * board[0].length);
            let col = Math.floor(Math.random() * board[0][0]);
        }
    }
    return board
}