// Problem Description
// Write a program to reverse the words present in a sentence.

// Input format
// First line contains an string consisting of words separated by spaces.

// Output format
// Return the string with it's words reversed.

// Sample Input 1
// abc def ghi

// Sample Output 1
// cba fed ihg

// Explanation
// abc reversed is cba, def reversed is fed, ghi reversed is igh.

// Constraints
// 1 <= str.length <= 10^5

function reverseCharacters(str) {
  let char = "";
  let rev = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      for (let j = char.length - 1; j >= 0; j--) {
        rev += char[j];
      }
      rev += " ";
      char = "";
    } else {
      char += str[i];
    }
    // console.log(char, rev);
  }
  for (let j = char.length - 1; j >= 0; j--) {
    rev += char[j];
  }
  return rev;
}

console.log(reverseCharacters("abc def ghi"));
