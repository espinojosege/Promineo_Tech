let gameBoard = document.getElementById("game");
let clickCount = 0;
let emptyCells = 9;
player1 = [];
player2 = [];
gameHasBeenWon = false;
let startBtn = document.getElementById("startBtn");
let header = document.getElementById("header");

startBtn.addEventListener("click", drawGame);

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

function checkIfGameWon(array) {
  winner = false;
  for (let i = 0; i < solutions.length; i++) {
    console.log(solutions[i]);
    let marks = 0;
    for (let j = 0; j < solutions[i].length; j++) {
      let number = solutions[i][j];
      console.log(number);
      if (array.includes(number)) {
        console.log("array array contains", number);
        marks++;
      } else {
        console.log("array does not container a solution number");
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
  console.log(array);
  return winner;
}

function drawGame() {
  gameBoard.innerHTML = "";
  header.innerHTML = "";
  let currentPlayer = document.createElement("h2");
  currentPlayer.innerHTML = "Turn: [Player 1]";
  header.appendChild(currentPlayer);

  for (let index = 0; index < 9; index++) {
    let aCell = 0;
    player1[index] = aCell;
    player2[index] = aCell;
    //  console.log(player1);
    //  console.log(player2);
    let cell = document.createElement("div");
    cell.className = "col-4 border p-4 h1";
    cell.innerHTML = "x | o";
    cell.setAttribute("style", "color:rgb(80,80,80, .25");
    cell.onclick = () => {
      if (clickCount == 0) {
        console.log("This is player 1(x)");
        if (cell.innerHTML == "x | o") {
          console.log(
            "This cell is empty",
            "Has been marked 'x'",
            "Now it is Player 2(o) Turn."
          );
          cell.innerHTML = "<span style='color: aqua'>x</span>";
          clickCount++;
          emptyCells--;
          currentPlayer.innerHTML = "Turn: [Player 2]";
          player1[index] = index + 1;
          console.log(player1);
          if (checkIfGameWon(player1)) {
            console.log("Player 1 has won!!");
            gameBoard.innerHTML = `<div class="alert alert-info" role="alert">
            Player 1 Has Won! Start a new game.
          </div>`;
            currentPlayer.innerHTML = "Player 1 WON!";
            clickCount = 0;
            emptyCells = 9;
          } else {
            console.log("Player 1 has not won this round!");
          }
          console.log(emptyCells);
          if (emptyCells == 0) {
            console.log(
              "All cells have been marked, Please refresh to play again"
            );
            alert("All cells have been marked, Refresh to play again.");
            gameBoard.innerHTML = `<div class="alert alert-danger" role="alert">
            Game Draw. Please play again!!
          </div>`;
            currentPlayer.innerHTML = "Game Draw!";
            clickCount = 0;
            emptyCells = 9;
          }
        } else if (cell.innerHTML == "x" || cell.innerHTML == "o") {
          console.log(
            "this cell has been marked",
            cell.innerHTML,
            "Please choose an empty cell to continue turn."
          );
        }
      } else {
        console.log("This is player 2(o)");
        if (cell.innerHTML == "x | o") {
          console.log(
            "This cell is empty",
            "Has been marked 'o'",
            "Now it is Player 1(x) Turn."
          );
          cell.innerHTML = "<span style='color: #fff'>o</span>";
          clickCount = 0;
          emptyCells--;
          currentPlayer.innerHTML = "Turn: [Player 1]";
          player2[index] = index + 1;
          console.log(player2);
          if (checkIfGameWon(player2)) {
            console.log("Player 2 has won!!");
            gameBoard.innerHTML = `<div class="alert alert-secondary" role="alert">
            Player 2 Has Won! Start a new game.
          </div>`;
            currentPlayer.innerHTML = "Player 2 WON!";
            clickCount = 0;
            emptyCells = 9;
          } else {
            console.log("Palyer 2 has not won this round!");
          }
          console.log(emptyCells);
          if (emptyCells == 0) {
            console.log(
              "All cells have been marked, Please refresh to play again"
            );
            alert("All cells have been marked, Refresh to play again.");
            gameBoard.innerHTML = `<div class="alert alert-danger" role="alert">
            Game Draw. Please play again!!
          </div>`;
            currentPlayer.innerHTML = "Game Draw!";
            emptyCells = 9;
            clickCount = 0;
          }
        } else if (cell.innerHTML == "x" || cell.innerHTML == "o") {
          console.log(
            "this cell has been marked",
            cell.innerHTML,
            "Please choose an empty cell to continue turn."
          );
        }
      }
    };
    gameBoard.appendChild(cell);
  }
}
