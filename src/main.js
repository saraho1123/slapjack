
var newGame = new Game();

document.addEventListener("keyup", slap)

// methods from Game class that are working so far!
newGame.shuffleDeck(newGame.cardDeck);
newGame.dealHand(newGame.cardDeck);
// newGame.updateGamePile();

// newGame.playSlapJack(newGame.currentPlayer);
// will need to update this to be whether f or j is keydown
// but for now, I don't know how to determine who slaps in the data model

function slap(event) {
  if (event.key === "f" || event.key === "F") {
    console.log("Fslap");
  } else if (event.key === "j" || event.key === "J") {
    console.log("Jslap");
  } else if (event.key === "q" || event.key === "Q") {
    console.log("Qplaycard");
  } else if (event.key === "p" || event.key === "P") {
    console.log("Pplaycard");
  }
}
