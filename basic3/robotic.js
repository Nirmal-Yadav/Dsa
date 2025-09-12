// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// Input format
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Output format
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Sample Input 1
// UD

// Sample Output 1
// true

// Explanation
// The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Sample Input 2
// LL

// Sample Output 2
// false

// Explanation
// The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

// Constraints
// 1 <= moves.length <= 10^4

function robotReturnToOrigin(moves) {
  let l = 0;
  let u = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "U") {
      u += 1;
    }
    if (moves[i] == "D") {
      u -= 1;
    }
    if (moves[i] == "L") {
      l -= 1;
    }
    if (moves[i] == "R") {
      l += 1;
    }
  }
  if (l === 0 && u === 0) {
    return true;
  }
  return false;
}

console.log(robotReturnToOrigin("UD"));
