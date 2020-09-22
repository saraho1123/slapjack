

// TODO: If 1 player is out of cards and the other player lays all their cards
// they need to be able to shuffle their cards and keep playing.

// TODO: If alert runs, replace the start button!

// Add instruction for how to play game and
// which keys do what

// Also! REFACTOR TO BE DRY AND SRP

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
    // TODO: Could refactor IF time!
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
      this.wrongSlap(slapPlayer, otherPlayer)
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

  wrongSlap(wrongSlapPlayer, otherPlayer) {
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
    } else if (this.playerMom.hand.length === 0 && playerWhoSlaps.id === "Isaac") {
      this.playerIsaac.updateWins();
    }
  }

  resetGameDeck() {
    this.gamePile = [];
    this.playerIsaac.resetPlayerDetails();
    this.playerMom.resetPlayerDetails();
    this.currentPlayer = this.playerIsaac;
    this.otherPlayer = this.playerMom;
  }
}
