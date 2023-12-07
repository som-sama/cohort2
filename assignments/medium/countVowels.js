/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase()
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]

    for (let string of str){
        if (vowels.includes(string)){
            count += 1
        }
    }
    return count
}

let string = "silent"
console.log(countVowels(string))


module.exports = countVowels;