const twoSum = (numbers, target) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const difference = String(target - numbers[i]);

    if (Object.keys(map).includes(difference)) return [map[difference], i];

    map[numbers[i]] = i;
  }
};

module.exports = twoSum;
