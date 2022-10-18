const longestPalindrome = (str) => {
  if (str.length === 0) return 0;

  let longestPalindromeLength = 1;

  for (let i = 1; i < str.length; i++) {
    const evenPalindromeLength = getMaxPalindromeLength(i - 1, i, str);
    const oddPalindromeLength = getMaxPalindromeLength(i - 1, i + 1, str);

    longestPalindromeLength = Math.max(
      longestPalindromeLength,
      evenPalindromeLength,
      oddPalindromeLength
    );
  }

  return longestPalindromeLength;
};

const getMaxPalindromeLength = (left, right, str) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;

    left--;
    right++;
  }

  return right - (left + 1);
};

module.exports = longestPalindrome;
