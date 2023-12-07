/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let str_rev = str.split('').reverse().join('')
  return str === str_rev
}

const string = "kayak"
console.log(isPalindrome(string))


module.exports = isPalindrome;
