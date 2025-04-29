function createBoard() {
    let chessBoard = [];
    for (let i = 0; i < 8; i++) {
        chessBoard[i] = new Array(8);
    }
    return chessBoard;
}

class Path {
    constructor(currentPos, parentNode) {
        this.currentPos = currentPos;
        this.parentNode = parentNode

    }
}

// let chessBoard = [[0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0]]


//possible moves
// let x = [-2, -1, 1, 2, 2, 1, -2, -1];
// let y = [1, 2, 2, 1, -1, -2, -1, -2];
let possibleMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-2, -1], [-1, -2]]

function knightMoves(from, toWhere) {
    // this function will take in two arrays, the first one is the starting position and the second one is the destination
    // the function will return the number of moves it took to get to the destination
    let dx = toWhere[0];
    let dy = toWhere[1];
    let count = 0;
    let queue = [];
    let firstNode = new Path(from, null, null)
    queue.push(firstNode);

    // the while loop will run until the first element in the queue is equal to the destination
    // the first element in the queue is the current position of the knight
    // the current position of the knight is the first element in the queue
    // the destination is the second element in the queue
    // the queue will be used to store the current position of the knight and the parent node
    // the parent node will be used to trace back the path taken by the knight
    while (queue[0].currentPos[0] !== dx || queue[0].currentPos[1] !== dy) {
        let newPosition;

        possibleMoves.forEach(move => {
            // newPosition = [queue[0].currentPos[0] + move[0], queue[0].currentPos[1] + move[1]]
            let tmp = new Path([queue[0].currentPos[0] + move[0], queue[0].currentPos[1] + move[1]], queue[0]);
            queue.push(tmp);
        })

        queue.shift();
    }

    let tmp = queue[0];
    let moves = []
    // getting the path taken by the knight
    // the path taken by the knight is the parent node of the current position of the knight
    // the parent node will be used to trace back the path taken by the knight
    while (tmp != null) {
        console.log(tmp.currentPos);
        moves.push(tmp.currentPos);
        tmp = tmp.parentNode;
        count++;
    }
    console.log("Path taken:");
    moves.reverse().forEach(pos => console.log(pos));

    console.log(`You made it in ${count} moves!`);
}

// let chessBoard = createBoard();
knightMoves([0, 0], [3, 3])