
var currentGame = new Game();

// query selectors:
var gameUpdateMessage = document.querySelector('.update-message');
var isaacCardDeck = document.querySelector('.isaac-player-deck');
var momCardDeck = document.querySelector('.mom-player-deck');
var gamePile = document.querySelector('.game-pile');
var isaacWins = document.querySelector('.isaac-wins');
var momWins = document.querySelector('.mom-wins');
var startGameButton = document.querySelector('.start-slapjack');

// event listeners:
startGameButton.addEventListener('click', startGame);
document.addEventListener('keydown', playHandler);

// methods from Game class that are working so far!
// currentGame.shuffleDeck(currentGame.cardDeck);
// currentGame.dealHand(currentGame.cardDeck);
// currentGame.updategamePile(); // connect to 'p' and 'q'
// updateATrueConditionSlap(); // connect this to 'f' and 'j' keydowns
// updateWins(); // connect this to slapATrueCondition with correct params

function startGame() {
  startGameButton.classList.add('hidden');
  gamePile.classList.remove('hidden');
  gamePile.src = './assets/isaac-cardback.jpeg';
  currentGame.shuffleDeck(currentGame.cardDeck);
  currentGame.dealHand(currentGame.cardDeck);
}

function playHandler(event) {
  layCard(event);
  slap(event);
}

function layCard(event) {
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
    startGameButton.classList.remove('hidden');
    gamePile.classList.add('hidden');
  } else {
    gamePile.src = currentGame.gamePile[0].src;
    changePlayerShadow();
  }
}

function changePlayerShadow() {
  if (currentGame.currentPlayer.id === 'Isaac') {
    currentGame.currentPlayer = currentGame.playerMom;
    isaacCardDeck.classList.remove('isaac-play-shadow');
    momCardDeck.classList.add('mom-play-shadow');
  } else if (currentGame.currentPlayer.id === 'Mom') {
      currentGame.currentPlayer = currentGame.playerIsaac;
      momCardDeck.classList.remove('mom-play-shadow');
      isaacCardDeck.classList.add('isaac-play-shadow');
    }
}

function slap(event) {
  var gameDeck = document.querySelector('.game-deck');
  if (event.key == 'f') {
    console.log('Isaac Slap!');
    gameUpdateMessage.innerText = '🤠🐉Isaac won the slap!🐉🤠';
    currentGame.playSlapJack(currentGame.playerIsaac);
    gamePile.src = './assets/isaac-cardback.jpeg';
    winningSlap();
  } else if (event.key == 'j') {
    console.log('Mom Slap!');
    gameUpdateMessage.innerText = '🥳🟣Mom won the slap!🟣🥳';
    currentGame.playSlapJack(currentGame.playerMom);
    gamePile.src = './assets/mom-w-isaac-win-back.jpeg';
    winningSlap();
  }
}

function winningSlap() {
  var isaacTotalWins = document.querySelector('.isaac-total-wins');
  var momTotalWins = document.querySelector('.mom-total-wins');
  if (currentGame.playerIsaac.wins > 0) {
    gameUpdateMessage.innerText = '🤠🐉ISAAC WON!!!!🐉🤠';
    startGameButton.classList.remove('hidden');
    gamePile.classList.add('hidden');
    isaacTotalWins.innerText = `${currentGame.playerIsaac.wins}`;
  } else if (currentGame.playerMom.wins > 0) {
    gameUpdateMessage.innerText = '🥳🟣MOM WON!!!🟣🥳';
    startGameButton.classList.remove('hidden');
    gamePile.classList.add('hidden');
    momTotalWins.innerText = `${currentGame.playerMom.wins}`
  }
}
// function play() {
//   console.log('whats up!');
//   if (event.key === 'f' || event.key === 'F') {
//     console.log('Fslap');
//   } else if (event.key === 'j' || event.key === 'J') {
//     console.log('Jslap');
//   } else if (event.key === 'q' || event.key === 'Q') {
//     console.log('Qplaycard');
//   } else if (event.key === 'p' || event.key === 'P') {
//     console.log('Pplaycard');
//   }
// }
