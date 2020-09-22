
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

// I think I want a button to show up that asks if they want to play again.
// if it is clicked, then it shows the startGameButton.
function startGame() {
  startGameButton.classList.add('hidden');
  gamePile.classList.remove('hidden');
  gamePile.src = './assets/isaac-cardback.jpeg';
  currentGame.shuffleDeck(currentGame.cardDeck);
  currentGame.dealHand(currentGame.cardDeck);
  momCardDeck.classList.remove('mom-play-shadow');
  isaacCardDeck.classList.add('isaac-play-shadow');
}

function playGame(event) {
  if (event.key === 'f' || event.key === 'j') {
    whoSlapped(event);
  } else if (event.key === 'q' || event.key === 'p') {
    // whoPlayed(event)
    layCard(event)
  }
}

function layCard(event) {
  if (event.key == 'q' && currentGame.currentPlayer.id === "Isaac") {
    changePlayerShadow(currentGame.playerIsaac.id);
    currentGame.currentPlayer = currentGame.playerIsaac;
    currentGame.updateGamePile();
    displayPlayedCard();
  } else if (event.key == 'p' && currentGame.currentPlayer.id === "Mom") {
    changePlayerShadow(currentGame.playerMom.id);
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

function changePlayerShadow(currentPlayer) {
  // whoPlayed();
  if (currentPlayer === 'Isaac') {
    console.log(currentPlayer);
    isaacCardDeck.classList.remove('isaac-play-shadow');
    momCardDeck.classList.add('mom-play-shadow');
  } else if (currentPlayer === 'Mom') {
      momCardDeck.classList.remove('mom-play-shadow');
      isaacCardDeck.classList.add('isaac-play-shadow');
    }
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
  if (player.id === "Isaac") {
    gameUpdateMessage.innerText = '🤠🐉Isaac won the slap!🐉🤠';
    gamePile.src = './assets/isaac-win-card-back.jpeg';
  } else if (player.id === "Mom") {
    gameUpdateMessage.innerText = '🥳🟣Mom won the slap!🟣🥳';
    gamePile.src = './assets/mom-w-isaac-win-back.jpeg';
  }
}

function wrongSlap () {
  gameUpdateMessage.innerText = 'Oops! That slap lost you a card!';
  gamePile.src = currentGame.gamePile[0].src;
}

function winningSlap(winner) {
  var isaacTotalWins = document.querySelector('.isaac-total-wins');
  var momTotalWins = document.querySelector('.mom-total-wins');
  if (currentGame.playerIsaac.wins > 0) {
    gameUpdateMessage.innerText = '🤠🐉ISAAC WON!!!!🐉🤠';
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


// function whoPlayed(event) {
//   if (event.key == 'q') {
//     currentGame.currentPlayer = currentGame.playerIsaac;
//     currentGame.otherPlayer = currentGame.playerMom;
//     layCard('q', currentGame.playerIsaac);
//   } else if (event.key == 'p') {
//       currentGame.currentPlayer = currentGame.playerMom;
//       currentGame.otherPlayer = currentGame.playerIsaac;
//       layCard('p', currentGame.currentPlayer);
//   }
//   // layCard(currentGame.currentPlayer)
// }
