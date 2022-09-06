const anagrams = (word, words) => {
  const sortedWord = sort(word);

  return words.reduce((anagrams, str) => {
    if (sort(str) === sortedWord) {
      anagrams.push(str);
    }
    return anagrams;
  }, []);
};

const sort = (str) => str.split("").sort().join("");

module.exports = anagrams;
