
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
document.addEventListener('keydown', playGame);

function startGame() {
  startGameButton.classList.add('hidden');
  gamePile.classList.remove('hidden');
  gamePile.src = './assets/isaac-cardback.jpeg';
  currentGame.shuffleDeck(currentGame.cardDeck);
  currentGame.dealHand(currentGame.cardDeck);
}

function playGame(event) {
  if (event.key === 'f' || event.key === 'j') {
    slap(event);
  } else if (event.key === 'q' || event.key === 'p') {
    layCard(event);
  }
}

function layCard(event) {
  // debugger
  if (event.key === 'q' && currentGame.currentPlayer.id === "Isaac") {
    console.log('Isaac card played.');
    changePlayerShadow();
    currentGame.currentPlayer = currentGame.playerIsaac;
    currentGame.updateGamePile();
    displayPlayedCard();
  } else if (event.key === 'p' && currentGame.currentPlayer.id === "Mom") {
    console.log('Mom card played.');
    changePlayerShadow();
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
  }
}

function changePlayerShadow() {
  whoPlayed();
  if (currentGame.currentPlayer.id === 'Isaac') {
    // currentGame.currentPlayer = currentGame.playerMom;
    isaacCardDeck.classList.remove('isaac-play-shadow');
    momCardDeck.classList.add('mom-play-shadow');
  } else if (currentGame.currentPlayer.id === 'Mom') {
      // currentGame.currentPlayer = currentGame.playerIsaac;
      momCardDeck.classList.remove('mom-play-shadow');
      isaacCardDeck.classList.add('isaac-play-shadow');
    }
}

// this needs to be refactored first, because it's going to make it all more simple
// need paramaters for event key. can I set that up in playHandler()?
// need params for player
function slap(event) {
  // debugger
  var gameDeck = document.querySelector('.game-deck');
  whoPlayed();
  currentGame.playSlapJack(currentGame.currentPlayer, currentGame.otherPlayer);
  if (event.key === 'f' && currentGame.slapIsCorrect === true) {
    console.log('Isaac Slap!');
    gameUpdateMessage.innerText = '🤠🐉Isaac won the slap!🐉🤠';
    gamePile.src = './assets/isaac-win-card-back.jpeg';
    winningSlap();
} else if (event.key === 'j' && currentGame.slapIsCorrect === true) {
      console.log('Mom Slap!');
      gameUpdateMessage.innerText = '🥳🟣Mom won the slap!🟣🥳';
      gamePile.src = './assets/mom-w-isaac-win-back.jpeg';
      winningSlap();
  } else {
    wrongSlap();
  }
}

function whoPlayed() {
  if (event.key == 'q') {
    currentGame.currentPlayer = currentGame.playerIsaac;
    currentGame.otherPlayer = currentGame.playerMom;
  } else if (event.key == 'p') {
      currentGame.currentPlayer = currentGame.playerMom;
      currentGame.otherPlayer = currentGame.playerIsaac;
  }
}

function wrongSlap () {
  gameUpdateMessage.innerText = 'Oops! That slap lost you a card!';
  gamePile.src = currentGame.gamePile[0].src;
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
