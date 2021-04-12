/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  const short = s1.length > s2.length ? [...s2] : [...s1];
  const long = s1.length > s2.length ? [...s1] : [...s2];

  while (short.length) {
    const currentChar = short.pop();
    if (long.includes(currentChar)) {
      commonChars++;
      long.splice(long.indexOf(currentChar), 1);
    }
  }

  return commonChars;
}

module.exports = getCommonCharacterCount;
