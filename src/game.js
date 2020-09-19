

class Game {
  constructor() {
    this.playerIsaac;
    this.playerMom;
    this.currentPlayer;
    this.gamePile = []; // I think this needs to be assigned in the updateGamePile()
    // consider shortening this array as you are working in order to test it!
    this.cardDeck = [
      {class: "blue-A", src: ".assets/blue-01.png"},
      {class: "blue-2", src: ".assets/blue-02.png"},
      {class: "blue-3", src: ".assets/blue-03.png"},
      {class: "blue-4", src: ".assets/blue-04.png"},
      {class: "blue-5", src: ".assets/blue-05.png"},
      {class: "blue-6", src: ".assets/blue-06.png"},
      {class: "blue-7", src: ".assets/blue-07.png"},
      {class: "blue-8", src: ".assets/blue-08.png"},
      {class: "blue-9", src: ".assets/blue-09.png"},
      {class: "blue-10", src: ".assets/blue-10.png"},
      {class: "blue-jack", src: ".assets/blue-jack.png"},
      {class: "blue-queen", src: ".assets/blue-queen.png"},
      {class: "blue-king", src: ".assets/blue-king.png"},
      {class: "gold-A", src: ".assets/gold-01.png"},
      {class: "gold-2", src: ".assets/gold-02.png"},
      {class: "gold-3", src: ".assets/gold-03.png"},
      {class: "gold-4", src: ".assets/gold-04.png"},
      {class: "gold-5", src: ".assets/gold-05.png"},
      {class: "gold-6", src: ".assets/gold-06.png"},
      {class: "gold-7", src: ".assets/gold-07.png"},
      {class: "gold-8", src: ".assets/gold-08.png"},
      {class: "gold-9", src: ".assets/gold-09.png"},
      {class: "gold-10", src: ".assets/gold-10.png"},
      {class: "gold-jack", src: ".assets/gold-jack.png"},
      {class: "gold-queen", src: ".assets/gold-queen.png"},
      {class: "gold-king", src: ".assets/gold-king.png"},
      {class: "green-A", src: ".assets/green-01.png"},
      {class: "green-2", src: ".assets/green-02.png"},
      {class: "green-3", src: ".assets/green-03.png"},
      {class: "green-4", src: ".assets/green-04.png"},
      {class: "green-5", src: ".assets/green-05.png"},
      {class: "green-6", src: ".assets/green-06.png"},
      {class: "green-7", src: ".assets/green-07.png"},
      {class: "green-8", src: ".assets/green-08.png"},
      {class: "green-9", src: ".assets/green-09.png"},
      {class: "green-10", src: ".assets/green-10.png"},
      {class: "green-jack", src: ".assets/green-jack.png"},
      {class: "green-queen", src: ".assets/green-queen.png"},
      {class: "green-king", src: ".assets/green-king.png"},
      {class: "red-A", src: ".assets/red-01.png"},
      {class: "red-2", src: ".assets/red-02.png"},
      {class: "red-3", src: ".assets/red-03.png"},
      {class: "red-4", src: ".assets/red-04.png"},
      {class: "red-5", src: ".assets/red-05.png"},
      {class: "red-6", src: ".assets/red-06.png"},
      {class: "red-7", src: ".assets/red-07.png"},
      {class: "red-8", src: ".assets/red-08.png"},
      {class: "red-9", src: ".assets/red-09.png"},
      {class: "red-10", src: ".assets/red-10.png"},
      {class: "red-jack", src: ".assets/red-jack.png"},
      {class: "red-queen", src: ".assets/red-queen.png"},
      {class: "red-king", src: ".assets/red-king.png"},
    ];
  }

  instantiatePlayers() {
    this.playerIsaac = new Player("Isaac", 0);
    this.playerMom = new Player("Mom", 0);
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
    this.instantiatePlayers();
    for (var i = 0; i < shuffledDeck.length; i++) {
      i % 2 ? this.playerIsaac.hand.push(shuffledDeck[i]) : this.playerMom.hand.push(shuffledDeck[i]);
    }
  }

  updateGamePile() {
    var cardPlayed;
    if (this.currentPlayer === "Isaac") {
      cardPlayed = this.playerIsaac.playCard();
      this.gamePile.push(cardPlayed);
      this.currentPlayer = this.playerMom.id;
    } else {
      cardPlayed = this.playerMom.playCard();
      this.gamePile.push(cardPlayed);
      this.currentPlayer = this.playerIsaac.id;
    }
    // this will hold the last card played (by either player)
    // ie: a randomly drawn card from the playerDetails.hand array
    // this will need to keep track of the cards for sandwich and double win conditions
    // DOM: this will need to be called in main.js to update html 'game-pile' element
  }

  updatePlayerTurn() {
    // will also update which playerDetails.hand array will be pulled from for play()
    // DOM: will this need update a visual of who's turn it is?
    // DOM: this will limit which keys will have event listeners (q, f OR p, j)
  }

  playSlapJack() {
    // this will simply (I hope) randomly pull a card from one playerDetails.hand array.
    // also I think it makes more sense to run this function BEFORE updateGamePile()
  }
  updateWins() {
    // this will hold the conditions for a win:
    // f or j keyup when a jack, double or sandwich is in the gamePile
    // when win condition is met, update the win for that playerDetails.wins
    // I am thinking:
    // an f keyup would give a win to isaacPlayer
    // a j keyup would give a win to momPlayer
    // update this in playerDetails.wins class.
    // DOM: display winner statment and update win counter <p>
  }

  resetDeck() {
    // this needs to remove cards from gamePile array and run shuffleDeck()
    // and possible dealHand() ?
    // DOM: update game-pile element, winner statement element
  }

}
