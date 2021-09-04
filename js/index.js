var p1 = rollDice("img.dice-player1");

var p2 = rollDice("img.dice-player2");

var message = "Draw!";

if (p1 > p2) {
  message = "🚩 Player 1 Wins!";
} else if (p2 > p1) {
  message = "Player 2 Wins! 🚩";
}

document.querySelector(".game-result").textContent = message;

function rollDice(select) {
  var r = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(select)
    .setAttribute("src", "images/dice" + r + ".png");
  return r;
}
