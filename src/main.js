var currentGame = new Game();

// query selectors:
var gameUpdateMessage = document.querySelector('.update-message');
var isaacCardDeck = document.querySelector('.isaac-player-deck');
var momCardDeck = document.querySelector('.mom-player-deck');
var gamePile = document.querySelector('.game-pile');
var isaacWins = document.querySelector('.isaac-wins');
var momWins = document.querySelector('.mom-wins');
var startGameButton = document.querySelector('.start-button');
var playAgainGameButton = document.querySelector('.again-button');

// event listeners:
startGameButton.addEventListener('click', startGame);
playAgainGameButton.addEventListener('click', newGame);
document.addEventListener('keydown', playGame);

function startGame() {
  changeHTMLClassProperty(startGameButton, 'hidden', gamePile, 'hidden');
  gamePile.src = './assets/thumbs-up-smiley.png';
  currentGame.shuffleDeck(currentGame.cardDeck);
  currentGame.dealHand(currentGame.cardDeck);
  changeHTMLClassProperty(isaacCardDeck, 'isaac-play-shadow', momCardDeck, 'mom-play-shadow');
}

function newGame() {
  changeHTMLClassProperty(playAgainGameButton, 'hidden', startGameButton, 'hidden');
  gamePile.classList.add('hidden');
  gameUpdateMessage.innerText = 'Let\'s Play!';
  currentGame.resetGameDeck();
}

function playGame(event) {
  if (event.key === 'f' || event.key === 'j') {
    whoSlapped(event);
  } else if (event.key === 'q' || event.key === 'p') {
    whoPlayed(event)
  }
}

function whoPlayed(event) {
  if (event.key == 'q' && currentGame.currentPlayer.id === "Isaac") {
    layCard(currentGame.playerIsaac, currentGame.playerMom);
  } else if (event.key == 'p' && currentGame.currentPlayer.id === "Mom") {
      layCard(currentGame.playerMom, currentGame.playerIsaac);
  }
}


function displayPlayedCard() {
  if (currentGame.gamePile.length === 0) {
    changeHTMLClassProperty(startGameButton, 'hidden', gamePile, 'hidden');
  } else {
    gamePile.src = currentGame.gamePile[0].src;
  }
}

function changePlayerShadow(currentPlayer) {
  if (currentPlayer === 'Isaac') {
    changeHTMLClassProperty(momCardDeck, 'mom-play-shadow', isaacCardDeck, 'isaac-play-shadow');
  } else if (currentPlayer === 'Mom') {
    changeHTMLClassProperty(isaacCardDeck, 'isaac-play-shadow', momCardDeck, 'mom-play-shadow');
  }
}

function continueLayingCards(playerWithCards, playerWithoutCards) {
  var currentPlayer
    if (currentGame.playerIsaac.hand.length === 0) {
      changeHTMLClassProperty(momCardDeck, 'mom-play-shadow', isaacCardDeck, 'isaac-play-shadow');
    } else if (currentGame.playerMom.hand.length === 0) {
      changeHTMLClassProperty(isaacCardDeck, 'isaac-play-shadow', momCardDeck, 'mom-play-shadow');
    }
}

function layCard(currentPlayer, otherPlayer) {
  gameUpdateMessage.innerText = '';
  changePlayerShadow(currentPlayer.id);
  currentGame.currentPlayer = currentPlayer;
  currentGame.updateGamePile();
  continueLayingCards()
  displayPlayedCard();
}

function whoSlapped(event) {
  if (event.key === 'f') {
    currentGame.playerIsaac.slapped = true;
    currentGame.playerMom.slapped = false;
    slap(currentGame.playerIsaac, currentGame.playerMom);
  } else if (event.key === 'j') {
    currentGame.playerMom.slapped = true;
    currentGame.playerIsaac.slapped = false;
    slap(currentGame.playerMom, currentGame.playerIsaac);
  }
  // ASK TARAS: This does not seem very DRY, but I cannot think of any other way to do this.
  // At least I only do it once? And it makes slap() really DRY and SRP!
}

function slap(playerWhoSlapped, otherPlayer) {
  var gameDeck = document.querySelector('.game-deck');
  currentGame.playSlapJack(playerWhoSlapped, otherPlayer);
  if (playerWhoSlapped.slapped === true && currentGame.slapIsCorrect === true) {
    updateSlapMessage(playerWhoSlapped)
    winningSlap(playerWhoSlapped);
  } else {
    wrongSlap();
  }
}

function updateSlapMessage(player) {
  gamePile.src = './assets/thumbs-up-smiley.png';
  if (player.id === "Isaac") {
    gameUpdateMessage.innerText = '🤠🐉Isaac won the slap!🐉🤠';
  } else if (player.id === "Mom") {
    gameUpdateMessage.innerText = '🥳🟣Mom won the slap!🟣🥳';
  }
}

function wrongSlap() {
  gameUpdateMessage.innerText = 'Oops! That slap lost you a card!';
  gamePile.src = currentGame.gamePile[0].src;
}

function winningSlap(winner) {
  if (currentGame.playerIsaac.wonThisHand === true) {
    isaacWinMessage();
  } else if (currentGame.playerMom.wonThisHand === true) {
    momWinMessage();
  }
}

function isaacWinMessage() {
  var isaacTotalWins = document.querySelector('.isaac-total-wins');
  gameUpdateMessage.innerText = '🤠🐉ISAAC WON!!!!🐉🤠';
  gamePile.src = './assets/isaac-win-image.jpeg';
  isaacTotalWins.innerText = `${currentGame.playerIsaac.wins}`;
  playAgainGameButton.classList.remove('hidden');
};

function momWinMessage() {
  var momTotalWins = document.querySelector('.mom-total-wins');
  gameUpdateMessage.innerText = '🥳🟣MOM WON!!!🟣🥳';
  gamePile.src = './assets/mom-win-image.jpeg';
  momTotalWins.innerText = `${currentGame.playerMom.wins}`;
  playAgainGameButton.classList.remove('hidden');
};

function changeHTMLClassProperty(element1, elementClass1, element2, elementClass2) {
  element1.classList.add(elementClass1);
  element2.classList.remove(elementClass2);
}
