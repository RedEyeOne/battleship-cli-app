export function printBoard(board, debug) {
    let boardObject = {}

    for (let col = 0; col < board[0].length; col++) {
        let colKey = String.fromCharCode(65 + col); // A, B, C...
        boardObject[colKey] = [];

        for (let row = 0; row < board.length; row++) {
            //cycle through each object and decide how to display it
            let cell = board[row][col];

            if (debug === true && cell.type !== 'empty') {
                if (cell.type === 'small') {
                    boardObject[colKey].push('🟠');
                };
                if  (cell.type === 'large') {
                    boardObject[colKey].push('🔵');
                };
                continue;
            }
            if (cell.hit === true && cell.type !== 'empty') {
                if (cell.type === 'small') {
                    boardObject[colKey].push('🟠');
                    // console.log('You\'ve got a HIT at ' + colKey + row);
                };
                if  (cell.type === 'large') {
                    boardObject[colKey].push('🔵');
                    // console.log('You\'ve got a HIT at ' + colKey + row);
                };
            }
            else if (cell.hit === true) boardObject[colKey].push("x");
            else boardObject[colKey].push("-");

        }
    }
    console.table(boardObject);
} 

export function generateBoardMap(size) {
  const boardMap = {};
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const key = letters[row] + (col);
      boardMap[key] = [row, (col)];
    }
  }

  return boardMap;
}