const firstNonRepeatingLetter = (str) => {
  if (str.length < 2) return str;

  const strLower = str.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
    const remainingChars = strLower.substring(0, i) + strLower.substring(i + 1);

    if (!remainingChars.includes(strLower[i])) return str[i];
  }

  return "";
};
