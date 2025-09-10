// Problem Description
// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Input format
// First line contains a string - The paragraph.

// Output format
// Print the paragraph after capitalizing each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

// Constraints
// Length of paragraph < 100.

function capitaliseBasic(paragraph) {
  const para = paragraph.split(" ");

  return para.reduce((acc, curr) => {
    let check = curr.charAt(0).toUpperCase() + curr.slice(1);

    return (acc = acc + (acc ? " " : "") + check);
  }, "");
}

console.log(capitaliseBasic("the quick Brown fox jumps over The lazy dog."));
