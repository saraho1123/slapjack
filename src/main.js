
var currentGame = new Game();

// query selectors:
var gameUpdateMessage = document.querySelector(".update-message");
var isaacCardDeck = document.querySelector(".isaac-player-deck");
var momCardDeck = document.querySelector(".mom-player-deck");
var gamePile = document.querySelector(".game-deck");
var isaacWins = document.querySelector(".isaac-wins");
var momWins = document.querySelector(".mom-wins");

// event listeners:
document.addEventListener("keydown", slap);
document.addEventListener("keydown", playCard);

// methods from Game class that are working so far!
// currentGame.shuffleDeck(currentGame.cardDeck);
// currentGame.dealHand(currentGame.cardDeck);
// currentGame.updateGamePile(); // connect to 'p' and 'q'
// updateATrueConditionSlap(); // connect this to 'f' and 'j' keydowns
// updateWins(); // connect this to slapATrueCondition with correct params

function playCard(event) {
  event.preventDefault();
  console.log('play card - Does this trigger other keys?');
  if (event.key == 'q') {
    console.log('Isaac card played.');
    currentGame.currentPlayer = currentGame.playerIsaac;
    currentGame.updateGamePile();
  } else if (event.key == 'p') {
    console.log('Mom card played.');
    currentGame.currentPlayer = currentGame.playerMom;
    currentGame.updateGamePile();
  }
}

function slap(event) {
  event.preventDefault();
  console.log('SLAP!');
  if (event.key == 'f') {
    console.log('Isaac Slap!');
    currentGame.playSlapJack(currentGame.playerIsaac);
  } else if (event.key == 'j') {
    console.log('Mom Slap!');
    currentGame.playSlapJack(currentGame.playerMom);
  }
}

// function play() {
//   console.log('whats up!');
//   if (event.key === "f" || event.key === "F") {
//     console.log("Fslap");
//   } else if (event.key === "j" || event.key === "J") {
//     console.log("Jslap");
//   } else if (event.key === "q" || event.key === "Q") {
//     console.log("Qplaycard");
//   } else if (event.key === "p" || event.key === "P") {
//     console.log("Pplaycard");
//   }
// }
