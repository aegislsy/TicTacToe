var playerTurn, move, isGameOver, span, restartButton;
playerTurn = "X";
moves = 0;
isGameOver = false;

span = document.getElementbyTagName("span");
restartButton =
  '<button onclick= "playAgain()"><svg xmlns= "http://www.w3.org/2000/svg" width="30" fill = "currentColor" class=bi bi-arrow-repeat" viewbox="0 0 16 16"><path d="M11.534 7h3.932.25.25 0 0 1 .192 .41l-1.966 2.36a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0.534 9z"/> <path fill-rule="evenodd"d=" M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 0 0 1 2.083 9h3.1z"/></svg></button> ';

function playAgain(y) {
  if (y.dataset.player == "none" && window.idGameOver == false) {
    y.innerHTML = playerTurn;
    moves++;
    if (playerTurn == "x") {
      playerTurn = "O";
    } else if (playerTurn == "O") {
      playerTurn = "X";
    }
  }

  checkWinner(1, 2, 3);
  checkWInner(4, 5, 6);
  checkWInner(7, 8, 9);
  checkWInner(1, 4, 7);
  checkWInner(2, 5, 8);
  checkWInner(3, 6, 9);
  checkWInner(1, 5, 9);
  checkWInner(3, 5, 7);
}
if (move == 9 && isGameOver == false) {
  draw();
}
function checkWinner(a,b,c) {
  a--; b--; c--;
  if (
    (span[a].dataset.player === span[b].dataset.player) &&
    (span[a].dataset.player === span[c].dataset.player) &&
    (span[a].dataset.player === span[c].dataset.player) &&(
      (span[a],dataset.player === "x") || span[a].dataset.player == "o" ) 
      && isGameOver(a);
  )
}
function playAgain() {
  document.getElementByIdClassName("alert")[0].parent.removeChild(document.getElementByIdClassName("alert")[0]);
  resetGame();
  window.isGameOver = false;
  for(var k = 0; k<span.length; k++) {
    span[k].parentNode.className = span[k].parentNode.className.replace("activeBox");
  }
}

function resetGame() {
  for(i=0; i<span.length; i++) {
    span[i].dataset.player = "none";
    span[i].innerHTML = "&nbsp";
  }

}