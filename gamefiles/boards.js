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

export function placeShip(board, shipSize, quantity) {
    function canPlaceShip(board, shipSize, orientation, row, col) {
        const boardHeight = board.length;
        const boardWidth = board[0].length;

        if (orientation === 'horizontal') {
            if (col + shipSize > boardWidth) return false;
            for (let i = 0; i < shipSize; i++) {
                if (board[row][col + i].type !== 'empty') return false;
            }
        } else if (orientation === 'vertical') {
            if (row + shipSize > boardHeight) return false;
            for (let i = 0; i < shipSize; i++) {
                if (board[row + i][col].type !== 'empty') return false;
            }
        }

        return true;
    }

    function addShip(board, shipSize, orientation, row, col) {
        const shipId = Math.floor(Math.random() * 10000);
        const shipType = shipSize >= 3 ? "large" : "small";
        for (let i = 0; i < shipSize; i++) {
            if (orientation === 'horizontal') {
                board[row][col + i] = { type: shipType, id: shipId, hit: false };
            } else if (orientation === 'vertical') {
                board[row + i][col] = { type: shipType, id: shipId, hit: false };
            }
        }
    }

    console.log(`⛵ Placing ${quantity} ship(s) of size ${shipSize}...`);

    let placed = 0;

    while (placed < quantity) {
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * board.length);
        const col = Math.floor(Math.random() * board[0].length);

        if (canPlaceShip(board, shipSize, orientation, row, col)) {
            addShip(board, shipSize, orientation, row, col);
            placed++;
        }
    }

    return board;
}
