const deleteNth = (arr, n) => {
  const motifsMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in motifsMap && motifsMap[arr[i]] >= n) {
      arr.splice(i, 1);
      i--;
    } else if (arr[i] in motifsMap) {
      motifsMap[arr[i]]++;
    } else {
      motifsMap[arr[i]] = 1;
    }
  }
  return arr;
};

module.exports = deleteNth;
