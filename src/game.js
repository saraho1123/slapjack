

// TODO Monday: If 1 player is out of cards and the other player lays all their cards
// they need to be able to shuffle their cards and keep playing.

// TODO Monday: fix player shadow when one player runs out of cards.

// TODO consider a for loop for types of slaps ['jack', 'double', 'sandwich']
// then set up a function in main.js to check which slap and return the correct message.
// maybe add a funny image?
// use gameUpdateMessage querySelector!

// Consider a winning image, and a button to return to start game

// Consider a function to update add and remove for classLists.

// Also! REFACTOR TO BE DRY AND SRP

// thoughts - consider putting wrong slap first!
// thoughts - do I need erase slap won message when new layCard();
// thoughts - I need to make sure the correct card is displayed on a wrongSlap!

class Game {
  constructor() {
    this.playerIsaac = new Player("Isaac");
    this.playerMom = new Player("Mom");
    this.currentPlayer = this.playerIsaac;
    this.otherPlayer = this.playerMom;
    this.slapIsCorrect = true;
    this.gamePile = [];
    this.cardDeck = cardDeck;
  }

  shuffleDeck(deckToShuffle) {
    for (var i = deckToShuffle.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var tempArray = deckToShuffle[i];
        deckToShuffle[i] = deckToShuffle[j];
        deckToShuffle[j] = tempArray;
    }
  }

  dealHand(shuffledDeck) {
    for (var i = 0; i < shuffledDeck.length; i++) {
      i % 2 ? this.playerIsaac.hand.push(shuffledDeck[i]) : this.playerMom.hand.push(shuffledDeck[i]);
    }
    // this.cardDeck = []; // I don't think I need to do this, but I am leaving it here in case I hit a problem later.
  }

  updateGamePile() {
    var cardPlayed;
    if (this.currentPlayer.id === "Isaac") {
      cardPlayed = this.playerIsaac.playCard();
      this.gamePile.unshift(cardPlayed);
      this.updatePlayerTurn();
    } else {
      cardPlayed = this.playerMom.playCard();
      this.gamePile.unshift(cardPlayed);
      this.updatePlayerTurn();
    }
  }

  updatePlayerTurn() {
    if (this.currentPlayer.id === "Isaac" && this.playerMom.hand[0] !== undefined) {
      this.currentPlayer = this.playerMom;
    } else if (this.currentPlayer.id === "Mom" && this.playerIsaac.hand[0] !== undefined) {
      this.currentPlayer = this.playerIsaac;
    } else if (this.playerIsaac.hand.length === 0 && this.playerMom.hand.length === 0) {
        alert("Please start a new game!")
        this.resetGameDeck();
    } else if (this.playerMom.hand[0] === undefined) {
        this.currentPlayer = this.playerIsaac;
    } else if (this.playerIsaac.hand[0] === undefined) {
        this.currentPlayer = this.playerMom;
    }
    console.log(this.currentPlayer);
    console.log(this.currentPlayer.hand);
  }

  playSlapJack(slapPlayer, otherPlayer) {
    // this has a bug! error if a slap attempt is made before 3 cards are played.
    if (this.gamePile[0].suit.includes("jack")) {
      this.jackSlap(slapPlayer)
    } else if (this.gamePile[0].value === this.gamePile[1].value) {
      this.doubleSlap(slapPlayer)
    } else if (this.gamePile[0].value === this.gamePile[2].value) {
      this.sandwichSlap(slapPlayer)
    } else {
      this.wrongSlap(slapPlayer)
    }
  }

  jackSlap(jackSlapPlayer) {
    this.updateATrueConditionSlap(jackSlapPlayer);
    this.updateWinner(jackSlapPlayer);
    this.shuffleDeck(jackSlapPlayer.hand);
  }

  doubleSlap(doubleSlapPlayer) {
    this.updateATrueConditionSlap(doubleSlapPlayer);
    this.shuffleDeck(doubleSlapPlayer.hand);
  }

  sandwichSlap(sandwichSlapPlayer) {
    this.updateATrueConditionSlap(sandwichSlapPlayer);
    this.shuffleDeck(sandwichSlapPlayer.hand);
  }

  wrongSlap(wrongSlapPlayer) {
    var wrongSlappedCard = this.gamePile.shift();
    otherPlayer.hand.push(wrongSlappedCard);
    this.slapIsCorrect = false;
    // need function to end game if player w/ no cards slaps on a non-Jack!

  }

  updateATrueConditionSlap(playerWhoSlaps) {
    playerWhoSlaps.hand = playerWhoSlaps.hand.concat(this.gamePile);
    this.gamePile = [];
  }

  updateWinner(playerWhoSlaps) {
    if (this.playerIsaac.hand.length === 0 &&  playerWhoSlaps.id === "Mom") {
      this.playerMom.updateWins();
      this.resetGameDeck();
    } else if (this.playerMom.hand.length === 0 && playerWhoSlaps.id === "Isaac") {
      this.playerIsaac.updateWins();
      this.resetGameDeck();
    }
  }

  resetGameDeck() {
    this.gamePile = [];
    this.playerIsaac.hand = [];
    this.playerMom.hand = [];
    this.currentPlayer = this.playerIsaac;
    this.otherPlayer = this.playerMom;
  }
}
