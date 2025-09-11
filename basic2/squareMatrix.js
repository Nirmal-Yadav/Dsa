// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

// Magic square is a square that has the same sum of rows, columns and diagonals.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100

// 1 <= element of matrix <= n*n

function checkMagicSquare(n, matrix) {
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    primary += matrix[i][i];
    secondary += matrix[i][n - 1 - i];
  }
  if (primary != secondary) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < n; j++) {
      rowSum += matrix[i][j];
      colSum += matrix[j][i];
    }
    if (rowSum != primary || colSum != primary) {
      return false;
    }
  }

  return true;
}

console.log(
  checkMagicSquare(3, [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ])
);
