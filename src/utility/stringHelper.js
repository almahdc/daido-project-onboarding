// function that replaces a string in a place you want with a new string
// replaceNoOfChar = 0 if no only insert needed
export function replaceString(str, index, value, replaceNoOfChar) {
  return str.substr(0, index) + value + str.substr(index + replaceNoOfChar);
}

// findIndex of char with multiple occurencies - noOfOccurency specify which occurency you want
// returns length of the string as the index if no suitabale occ found
export function findIndex(str, char, noOfOccurency) {
  const strLength = str.length;
  const indexes = [];

  for (let i = 0; i < strLength; i++) {
    if (str[i] === char) {
      indexes.push(i);
      if (indexes.length === noOfOccurency) {
        return i;
      }
    }
  }
  return strLength;
}
