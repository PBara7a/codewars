const count = (string) => {
  string = string.replace(/\s/g, "");

  return string.split("").reduce((acc, cur) => {
    if (Object.keys(acc).includes(cur)) {
      acc[cur] += 1;
    } else acc[cur] = 1;
    return acc;
  }, {});
};

module.exports = count;
