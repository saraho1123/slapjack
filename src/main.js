
var currentGame = new Game();

// query selectors:
var gameUpdateMessage = document.querySelector(".update-message");
var isaacCardDeck = document.querySelector(".isaac-player-deck");
var momCardDeck = document.querySelector(".mom-player-deck");
var gamePile = document.querySelector(".game-deck");
var isaacWins = document.querySelector(".isaac-wins");
var momWins = document.querySelector(".mom-wins");
var startGameButton = document.querySelector(".start-slapjack");

// event listeners:
document.addEventListener("keydown", playHandler);
startGameButton.addEventListener("click", startGame);

// methods from Game class that are working so far!
// currentGame.shuffleDeck(currentGame.cardDeck);
// currentGame.dealHand(currentGame.cardDeck);
// currentGame.updateGamePile(); // connect to 'p' and 'q'
// updateATrueConditionSlap(); // connect this to 'f' and 'j' keydowns
// updateWins(); // connect this to slapATrueCondition with correct params

function playHandler(event) {
  playCard(event);
  slap(event);
}

function startGame() {
  startGameButton.classList.add("hidden");
  gamePile.classList.remove("hidden");
  gamePile.src = "./assets/wild.png";
  currentGame.shuffleDeck(currentGame.cardDeck);
  currentGame.dealHand(currentGame.cardDeck);
}

function playCard(event) {
  if (event.key == 'q') {
    console.log('Isaac card played.');
    currentGame.currentPlayer = currentGame.playerIsaac;
    currentGame.updateGamePile();
    displayPlayedCard();
  } else if (event.key == 'p') {
    console.log('Mom card played.');
    currentGame.currentPlayer = currentGame.playerMom;
    currentGame.updateGamePile();
    displayPlayedCard();
  }
}

function displayPlayedCard() {
  if (currentGame.gamePile.length === 0) {
    startGameButton.classList.remove("hidden");
    gamePile.classList.add("hidden");
  } else {
    gamePile.src = currentGame.gamePile[0].src;
  }
}

function slap(event) {
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
