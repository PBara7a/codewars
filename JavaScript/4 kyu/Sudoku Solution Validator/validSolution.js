function validSolution(board) {
  // Check rows
  for (const row of board) {
    if (!isValidSection(row)) return false;
  }

  // check columns
  for (let i = 0; i < board.length; i++) {
    const column = board.map((row) => row[i]);
    if (!isValidSection(column)) return false;
  }

  // Check blocks
  const blocks = getSudokuBlocks(board);

  for (const block of blocks) {
    if (!isValidSection(block)) return false;
  }

  return true;
}

function isValidSection(section) {
  const valid = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const sortedSection = JSON.stringify([...section].sort());

  if (sortedSection !== valid) return false;
  return true;
}

function getSudokuBlocks(board) {
  // Make arrays with the values of each 3x3 block
  const blocks = [];
  let [leftBlock, middleBlock, rightBlock] = [[], [], []];

  for (let i = 0; i < board.length; i++) {
    if (i === 3 || i === 6) {
      blocks.push([...leftBlock], [...middleBlock], [...rightBlock]);
      leftBlock = [];
      middleBlock = [];
      rightBlock = [];
    }

    for (let j = 0; j < board[0].length; j++) {
      if (j < 3) leftBlock.push(board[i][j]);
      else if (j < 6) middleBlock.push(board[i][j]);
      else rightBlock.push(board[i][j]);
    }
  }
  blocks.push([...leftBlock], [...middleBlock], [...rightBlock]);

  return blocks;
}

module.exports = validSolution;
