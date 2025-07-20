export function printBoard(board, debug) {
    let boardObject = {}
    


    for (let col = 0; col < board[0].length; col++) {
        let colKey = String.fromCharCode(65 + col); // A, B, C...
        boardObject[colKey] = [];

        for (let row = 0; row < board.length; row++) {
            //cycle through each object and decide how to display it
            let cell = board[row][col];

            if (debug === true && cell.type !== 'empty') {
                if (cell.type === 'small') boardObject[colKey].push('🟠');
                if  (cell.type === 'large') boardObject[colKey].push('🔵');
                
                console.log(cell);
                continue;
            }
                
            if (cell.hit === true) boardObject[colKey].push("x");
            else boardObject[colKey].push("-");

        }
    }
    console.table(boardObject);
} 