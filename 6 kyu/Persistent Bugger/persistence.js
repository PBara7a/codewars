const persistence = (num, count = 0) => {
  if (num < 10) return count;

  const digits = String(num)
    .split("")
    .map((digit) => Number(digit));

  const product = digits.reduce((acc, cur) => acc * cur);
  count++;

  if (product < 10) return count;

  return persistence(product, count);
};

module.exports = persistence;
