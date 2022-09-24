const validSolution = (board) => {
  const valid = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const row of board) {
    const sortedRow = JSON.stringify([...row].sort());

    if (sortedRow !== valid) return false;
  }

  const squares = [];

  let [leftSquare, middleSquare, rightSquare] = [[], [], []];

  for (let i = 0; i < board.length; i++) {
    if (i === 3 || i === 6) {
      squares.push([...leftSquare], [...middleSquare], [...rightSquare]);

      leftSquare = [];
      middleSquare = [];
      rightSquare = [];
    }

    for (let j = 0; j < board[0].length; j++) {
      if (j < 3) leftSquare.push(board[i][j]);
      else if (j < 6) middleSquare.push(board[i][j]);
      else rightSquare.push(board[i][j]);
    }
  }
  squares.push([...leftSquare], [...middleSquare], [...rightSquare]);

  for (const square of squares) {
    const sortedSquare = JSON.stringify([...square].sort());

    if (sortedSquare !== valid) return false;
  }

  return true;
};

module.exports = validSolution;
