/**
   Create a file named “palindrome.js” and inside the file, create a function named “palindrome”. 
   The function should accept a word and check if that word is a palindrome.
    Example, level is a palindrome, energy is not a palindrome.
 */

function palindrome(word) {
  word = word.trim();
  let wordReversed = [...word].reverse().join("");

  let result =
    word === wordReversed
      ? `${word} is a palindrome`
      : `${word} is not a palindrome`;
  return result;
}
console.log(palindrome("level"));
console.log(palindrome("energy"));
