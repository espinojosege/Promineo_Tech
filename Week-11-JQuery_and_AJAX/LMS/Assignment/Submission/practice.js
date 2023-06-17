solutions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

p1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(p1);

function checkIfGameWon(array) {
  winner = false;
  for (let i = 0; i < solutions.length; i++) {
    console.log(solutions[i]);
    let marks = 0;
    for (let j = 0; j < solutions[i].length; j++) {
      let number = solutions[i][j];
      console.log(number);
      if (array.includes(number)) {
        console.log("p1 array contains", number);
        marks++;
      } else {
        console.log("p1 does not container a solution number");
      }
    }
    console.log("\n", marks);
    if (marks == 3) {
      console.log("You are a winner");
      winner = true;
    } else {
      console.log("Please try again");
    }
  }

  if (winner) {
    console.log("\n\nThis game had a winner!");
  } else {
    console.log("\n\nPlease refresh to play again.");
  }

  return winner;
}

if (checkIfGameWon(p1)) {
  console.log("\nPlayer1 Has won!");
} else {
  console.log("\nPlayer1 has not won this round");
}
