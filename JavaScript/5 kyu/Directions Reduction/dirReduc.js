const dirReduc = (arr) => {
  let i = 0;

  while (i < arr.length) {
    const curDirection = arr[i];
    const nextDirection = arr[i + 1];

    if (dirValue[curDirection] + dirValue[nextDirection] === 0) {
      arr.splice(i, 2);

      if (i > 0) i--;

      continue;
    }

    i++;
  }

  return arr;
};

const dirValue = {
  NORTH: 2,
  SOUTH: -2,
  EAST: 1,
  WEST: -1,
};

module.exports = dirReduc;
