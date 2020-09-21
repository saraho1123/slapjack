// TODO: PR FOR current branch
//

// TODO Monday: If 1 player is out of cards and the other player lays all their cards
// they need to be able to shuffle their cards and keep playing.

// TODO Monday: If both people slap, the person who slapped LAST has the 'slap won' message appear,
// even though the other person won the slap. I tried to fix it with && in the if statements for slap(),
// but then whoever slapped first is the only person who can slap for the rest of the game. (see error message for line 133!)

// TODO Monday: If you try to start a new game with the button, there are an quite a lot of bugs.

// TODO MONDAY: Before anything else, REFACTOR TO BE DRY AND SRP

// thoughts - consider putting wrong slap first!
// thoughts - do I need erase slap won message when new layCard();
// thoughts - I need to make sure the correct card is displayed on a wrongSlap!

class Game {
  constructor() {
    this.playerIsaac = new Player("Isaac");
    this.playerMom = new Player("Mom");;
    this.currentPlayer = this.playerIsaac;
    this.gamePile = [];
    // consider shortening this array as you are working in order to test it!
    this.cardDeck = [
      {suit: "blue-A", value: "A", src: "./assets/blue-01.png"},
      {suit: "blue-2",  value: "2", src: "./assets/blue-02.png"},
      {suit: "blue-3",  value: "3", src: "./assets/blue-03.png"},
      {suit: "blue-4",  value: "4", src: "./assets/blue-04.png"},
      {suit: "blue-5",  value: "5", src: "./assets/blue-05.png"},
      {suit: "blue-6",  value: "6", src: "./assets/blue-06.png"},
      {suit: "blue-7",  value: "7", src: "./assets/blue-07.png"},
      {suit: "blue-8",  value: "8", src: "./assets/blue-08.png"},
      {suit: "blue-9",  value: "9", src: "./assets/blue-09.png"},
      {suit: "blue-10",  value: "10", src: "./assets/blue-10.png"},
      {suit: "blue-jack",  value: "jack", src: "./assets/blue-jack.png"},
      {suit: "blue-queen",  value: "queen", src: "./assets/blue-queen.png"},
      {suit: "blue-king",  value: "king", src: "./assets/blue-king.png"},
      {suit: "gold-A",  value: "A", src: "./assets/gold-01.png"},
      {suit: "gold-2",  value: "2", src: "./assets/gold-02.png"},
      {suit: "gold-3",  value: "3", src: "./assets/gold-03.png"},
      {suit: "gold-4",  value: "4", src: "./assets/gold-04.png"},
      {suit: "gold-5",  value: "5", src: "./assets/gold-05.png"},
      {suit: "gold-6",  value: "6", src: "./assets/gold-06.png"},
      {suit: "gold-7",  value: "7", src: "./assets/gold-07.png"},
      {suit: "gold-8",  value: "8", src: "./assets/gold-08.png"},
      {suit: "gold-9",  value: "9", src: "./assets/gold-09.png"},
      {suit: "gold-10",  value: "10", src: "./assets/gold-10.png"},
      {suit: "gold-jack",  value: "jack", src: "./assets/gold-jack.png"},
      {suit: "gold-queen",  value: "queen", src: "./assets/gold-queen.png"},
      {suit: "gold-king",  value: "king", src: "./assets/gold-king.png"},
      {suit: "green-A",  value: "A", src: "./assets/green-01.png"},
      {suit: "green-2",  value: "2", src: "./assets/green-02.png"},
      {suit: "green-3",  value: "3", src: "./assets/green-03.png"},
      {suit: "green-4",  value: "4", src: "./assets/green-04.png"},
      {suit: "green-5",  value: "5", src: "./assets/green-05.png"},
      {suit: "green-6",  value: "6", src: "./assets/green-06.png"},
      {suit: "green-7",  value: "7", src: "./assets/green-07.png"},
      {suit: "green-8",  value: "8", src: "./assets/green-08.png"},
      {suit: "green-9",  value: "9", src: "./assets/green-09.png"},
      {suit: "green-10",  value: "10", src: "./assets/green-10.png"},
      {suit: "green-jack",  value: "jack", src: "./assets/green-jack.png"},
      {suit: "green-queen",  value: "queen", src: "./assets/green-queen.png"},
      {suit: "green-king",  value: "king", src: "./assets/green-king.png"},
      {suit: "red-A",  value: "A", src: "./assets/red-01.png"},
      {suit: "red-2",  value: "2", src: "./assets/red-02.png"},
      {suit: "red-3",  value: "3", src: "./assets/red-03.png"},
      {suit: "red-4",  value: "4", src: "./assets/red-04.png"},
      {suit: "red-5",  value: "5", src: "./assets/red-05.png"},
      {suit: "red-6",  value: "6", src: "./assets/red-06.png"},
      {suit: "red-7",  value: "7", src: "./assets/red-07.png"},
      {suit: "red-8",  value: "8", src: "./assets/red-08.png"},
      {suit: "red-9",  value: "9", src: "./assets/red-09.png"},
      {suit: "red-10",  value: "10", src: "./assets/red-10.png"},
      {suit: "red-jack",  value: "jack", src: "./assets/red-jack.png"},
      {suit: "red-queen",  value: "queen", src: "./assets/red-queen.png"},
      {suit: "red-king",  value: "king", src: "./assets/red-king.png"},
    ];
    // consider putting this in a seperate src file?
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
    // this.cardDeck = []; I don't think I need to do this, but I am leaving it here in case I hit a problem later.
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
    console.log(cardPlayed.suit);
    console.log(this.playerIsaac.hand.length);
    console.log(this.playerMom.hand.length);
    // DOM: this will need to be called in main.js to update html 'game-pile' element
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
    // This needs to be refactored using args/params (see updateGamePile())

    // DOM: will this need update a visual of who's turn it is?
    // DOM: this will limit which keys will have event listeners (q, f OR p, j)
  }

  playSlapJack(player) {
    // this has a bug! error if a slap attempt is made before 3 cards are played.
    if (this.gamePile[0].suit.includes("jack")) {
      console.log("SLAPJACK!");
      this.updateATrueConditionSlap(player);
      this.updateWins(player);
      this.shuffleDeck(player.hand);
    } else if (this.gamePile[0].value === this.gamePile[1].value) {
      console.log("DOUBLE!")
      this.updateATrueConditionSlap(player);
      // this.updateWins(player)
      this.shuffleDeck(player.hand);
    } else if (this.gamePile[0].value === this.gamePile[2].value) {
      console.log("SANDWICH!");
      this.updateATrueConditionSlap(player);
      // this.updateWins(player)
      this.shuffleDeck(player.hand);
    } else {
      console.log("OOPS!");
      // need function to end game if player w/ no cards slaps on a non-Jack!
      var wrongSlappedCard = this.gamePile.shift();
      player.hand.push(wrongSlappedCard);
    }
  }

  updateATrueConditionSlap(playerWhoSlaps) {
    playerWhoSlaps.hand = playerWhoSlaps.hand.concat(this.gamePile);
    this.gamePile = [];
  }

  updateWins(playerWhoSlaps) {
    if (this.playerIsaac.hand[0] === undefined &&  playerWhoSlaps.id === "Mom") {
      console.log("Mom wins!");
      this.playerMom.wins++;
      this.resetGameDeck();
      this.playerIsaac.hand = [];
      this.playerMom.hand = [];
    } else if (this.playerMom.hand[0] === undefined && playerWhoSlaps.id === "Isaac") {
      console.log("Isaac wins!");
      this.playerIsaac.wins++;
      this.resetGameDeck();
      this.playerMom = [];
      this.playerIsaac.hand = [];
    }
    // this.currentPlayer.wins++;

    // It seems like all this needs to go in the main.js to update the DOM:
    // there is probably a way to determing the winner without a listener on the key down for f and j,
    // but I think it is beyond my logic ability right now.
    // f or j keyup when a jack, double or sandwich is in the gamePile
    // when win condition is met, update the win for that playerDetails.wins
    // I am thinking:
    // an f keyup would give a win to isaacPlayer
    // a j keyup would give a win to momPlayer
    // update this in playerDetails.wins class.
    // DOM: display winner statment and update win counter <p>
  }

  resetGameDeck() {
    this.gamePile = [];
    this.playerIsaac = [];
    // this.playerMom = [];
  }
}
