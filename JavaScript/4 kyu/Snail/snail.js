const snail = (array) => {
  const matrix = [...array];

  const snailTrail = [];

  while (matrix.length > 0) {
    //top
    snailTrail.push(...matrix.shift());

    //right
    for (let i = 0; i < matrix.length; i++) {
      snailTrail.push(matrix[i].pop());
    }

    //bottom
    const bottomRow = matrix.pop();

    if (bottomRow) {
      snailTrail.push(...bottomRow.reverse());
    }

    //left
    for (let i = matrix.length - 1; i >= 0; i--) {
      snailTrail.push(matrix[i].shift());
    }
  }

  return snailTrail;
};

module.exports = snail;
