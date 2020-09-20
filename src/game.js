

class Game {
  constructor() {
    this.playerIsaac = new Player("Isaac", 0);
    this.playerMom = new Player("Mom", 0);;
    this.currentPlayer = "Isaac";
    this.gamePile = [];
    // consider shortening this array as you are working in order to test it!
    this.cardDeck = [
      {suit: "blue", value: "A", src: ".assets/blue-01.png"},
      {suit: "blue",  value: "2", src: ".assets/blue-02.png"},
      {suit: "blue",  value: "3", src: ".assets/blue-03.png"},
      {suit: "blue",  value: "4", src: ".assets/blue-04.png"},
      {suit: "blue",  value: "5", src: ".assets/blue-05.png"},
      {suit: "blue",  value: "6", src: ".assets/blue-06.png"},
      {suit: "blue",  value: "7", src: ".assets/blue-07.png"},
      {suit: "blue",  value: "8", src: ".assets/blue-08.png"},
      {suit: "blue",  value: "9", src: ".assets/blue-09.png"},
      {suit: "blue",  value: "10", src: ".assets/blue-10.png"},
      {suit: "blue",  value: "jack", src: ".assets/blue-jack.png"},
      {suit: "blue",  value: "queen", src: ".assets/blue-queen.png"},
      {suit: "blue",  value: "king", src: ".assets/blue-king.png"},
      {suit: "gold-A",  value: "A", src: ".assets/gold-01.png"},
      {suit: "gold-2",  value: "2", src: ".assets/gold-02.png"},
      {suit: "gold-3",  value: "3", src: ".assets/gold-03.png"},
      {suit: "gold-4",  value: "4", src: ".assets/gold-04.png"},
      {suit: "gold-5",  value: "5", src: ".assets/gold-05.png"},
      {suit: "gold-6",  value: "6", src: ".assets/gold-06.png"},
      {suit: "gold-7",  value: "7", src: ".assets/gold-07.png"},
      {suit: "gold-8",  value: "8", src: ".assets/gold-08.png"},
      {suit: "gold-9",  value: "9", src: ".assets/gold-09.png"},
      {suit: "gold-10",  value: "10", src: ".assets/gold-10.png"},
      {suit: "gold-jack",  value: "jack", src: ".assets/gold-jack.png"},
      {suit: "gold-queen",  value: "queen", src: ".assets/gold-queen.png"},
      {suit: "gold-king",  value: "king", src: ".assets/gold-king.png"},
      {suit: "green-A",  value: "A", src: ".assets/green-01.png"},
      {suit: "green-2",  value: "2", src: ".assets/green-02.png"},
      {suit: "green-3",  value: "3", src: ".assets/green-03.png"},
      {suit: "green-4",  value: "4", src: ".assets/green-04.png"},
      {suit: "green-5",  value: "5", src: ".assets/green-05.png"},
      {suit: "green-6",  value: "6", src: ".assets/green-06.png"},
      {suit: "green-7",  value: "7", src: ".assets/green-07.png"},
      {suit: "green-8",  value: "8", src: ".assets/green-08.png"},
      {suit: "green-9",  value: "9", src: ".assets/green-09.png"},
      {suit: "green-10",  value: "10", src: ".assets/green-10.png"},
      {suit: "green-jack",  value: "jack", src: ".assets/green-jack.png"},
      {suit: "green-queen",  value: "queen", rc: ".assets/green-queen.png"},
      {suit: "green-king",  value: "king", src: ".assets/green-king.png"},
      {suit: "red-A",  value: "A", src: ".assets/red-01.png"},
      {suit: "red-2",  value: "2", src: ".assets/red-02.png"},
      {suit: "red-3",  value: "3", src: ".assets/red-03.png"},
      {suit: "red-4",  value: "4", src: ".assets/red-04.png"},
      {suit: "red-5",  value: "5", src: ".assets/red-05.png"},
      {suit: "red-6",  value: "6", src: ".assets/red-06.png"},
      {suit: "red-7",  value: "7", src: ".assets/red-07.png"},
      {suit: "red-8",  value: "8", src: ".assets/red-08.png"},
      {suit: "red-9",  value: "9", src: ".assets/red-09.png"},
      {suit: "red-10",  value: "10", src: ".assets/red-10.png"},
      {suit: "red-jack",  value: "jack", src: ".assets/red-jack.png"},
      {suit: "red-queen",  value: "queen", src: ".assets/red-queen.png"},
      {suit: "red-king",  value: "king", src: ".assets/red-king.png"},
    ];
  }

  // instantiatePlayers() {
    // this.playerIsaac = new Player("Isaac", 0);
    // this.playerMom = new Player("Mom", 0);
  // }

  shuffleDeck(deckToShuffle) {
    for (var i = deckToShuffle.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var tempArray = deckToShuffle[i];
        deckToShuffle[i] = deckToShuffle[j];
        deckToShuffle[j] = tempArray;
    }
  }

  dealHand(shuffledDeck) {
    // this.instantiatePlayers();
    for (var i = 0; i < shuffledDeck.length; i++) {
      i % 2 ? this.playerIsaac.hand.push(shuffledDeck[i]) : this.playerMom.hand.push(shuffledDeck[i]);
    }
    // this.cardDeck = []; I don't think I need to do this, but I am leaving it here in case I hit a problem later.
  }

  updateGamePile() {
    var cardPlayed;
    if (this.currentPlayer === "Isaac") {
      cardPlayed = this.playerIsaac.playCard();
      this.gamePile.unshift(cardPlayed);
      this.currentPlayer = this.playerMom.id;
    } else {
      cardPlayed = this.playerMom.playCard();
      this.gamePile.unshift(cardPlayed);
      this.currentPlayer = this.playerIsaac.id;
    }
    console.log(cardPlayed);
    // this will hold the last card played (by either player)
    // ie: a randomly drawn card from the playerDetails.hand array
    // this will need to keep track of the cards for sandwich and double win conditions
    // DOM: this will need to be called in main.js to update html 'game-pile' element
  }

  updatePlayerTurn() {
    // I think this should do the push into gamePile using arguments/params,
    // but I'm going to leave that for a refactor at the moment.
    // this.gamePile.push(cardPlayed);
    // will also update which playerDetails.hand array will be pulled from for play()
    // DOM: will this need update a visual of who's turn it is?
    // DOM: this will limit which keys will have event listeners (q, f OR p, j)
  }

  playSlapJack() {
    // I think this actually needs to have the conditionals for wins
    if (this.gamePile[0].suit.includes("jack")){
      console.log("SLAPJACK!");
    } else if (this.gamePile[0].value === this.gamePile[1].value) {
      console.log("DOUBLE!")
    }
    }

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
