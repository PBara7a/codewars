const rot13 = (message) => {
  return message
    .split("")
    .map((char) => {
      if (isAlphabetChar(char)) {
        const offset = isUpperAlphabetChar(char) ? 97 : 65;
        const current = char.charCodeAt(0) - offset;
        const next = ((current + 13) % 26) + offset;

        return String.fromCharCode(next);
      } else return char;
    })
    .join("");
};

const isAlphabetChar = (char) => /[a-z]|[A-Z]/.test(char);
const isUpperAlphabetChar = (char) => /[a-z]/.test(char);

module.exports = rot13;
