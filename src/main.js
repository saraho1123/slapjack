
var currentGame = new Game();

// query selectors:
var gameUpdateMessage = document.querySelector(".update-message");
var isaacCardDeck = document.querySelector(".isaac-player-deck");
var momCardDeck = document.querySelector(".mom-player-deck");
var gamePile = document.querySelector(".game-deck");
var isaacWins = document.querySelector(".isaac-wins");
var momWins = document.querySelector(".mom-wins");

// event listeners:
document.addEventListener("keydown", slap)

// methods from Game class that are working so far!
currentGame.shuffleDeck(currentGame.cardDeck);
currentGame.dealHand(currentGame.cardDeck);
// currentGame.updateGamePile( this will need to be connected to 'p' and 'q');
// slapATrueCondition(connect this to 'f' and 'j' keydowns);
// updateWins( need to connect this to slapATrueCondition with correct params);

// currentGame.playSlapJack(currentGame.currentPlayer);
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
