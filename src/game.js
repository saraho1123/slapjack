class Game {
  constructor(playerDetails) {
    this.playerIsaac; // I am not sure how to assign these just yet. Or if they
    this.playerMom; //
    // this.cardDeck = []; // array of cards (possibly an array of objects?) I put this below for now;
    this.gamePile; // I think this needs to be assigned in the updateGamePile()

  // I think I want my cardDeck to be an array of objects so that it is easy to
  // translate it to the DOM when the time comes. I put href, but I'm thinking I'll
  // need to change this to src??

  // consider shortening this array as you are building in order to test it!

    this.cardDeck = [
      {class: "blue-A", href: ".assets/blue-01.png"},
      {class: "blue-2", href: ".assets/blue-02.png"},
      {class: "blue-3", href: ".assets/blue-03.png"},
      {class: "blue-4", href: ".assets/blue-04.png"},
      {class: "blue-5", href: ".assets/blue-05.png"},
      {class: "blue-6", href: ".assets/blue-06.png"},
      {class: "blue-7", href: ".assets/blue-07.png"},
      {class: "blue-8", href: ".assets/blue-08.png"},
      {class: "blue-9", href: ".assets/blue-09.png"},
      {class: "blue-10", href: ".assets/blue-10.png"},
      {class: "blue-jack", href: ".assets/blue-jack.png"},
      {class: "blue-queen", href: ".assets/blue-queen.png"},
      {class: "blue-king", href: ".assets/blue-king.png"},
      {class: "gold-A", href: ".assets/gold-01.png"},
      {class: "gold-2", href: ".assets/gold-02.png"},
      {class: "gold-3", href: ".assets/gold-03.png"},
      {class: "gold-4", href: ".assets/gold-04.png"},
      {class: "gold-5", href: ".assets/gold-05.png"},
      {class: "gold-6", href: ".assets/gold-06.png"},
      {class: "gold-7", href: ".assets/gold-07.png"},
      {class: "gold-8", href: ".assets/gold-08.png"},
      {class: "gold-9", href: ".assets/gold-09.png"},
      {class: "gold-10", href: ".assets/gold-10.png"},
      {class: "gold-jack", href: ".assets/gold-jack.png"},
      {class: "gold-queen", href: ".assets/gold-queen.png"},
      {class: "gold-king", href: ".assets/gold-king.png"},
      {class: "green-A", href: ".assets/green-01.png"},
      {class: "green-2", href: ".assets/green-02.png"},
      {class: "green-3", href: ".assets/green-03.png"},
      {class: "green-4", href: ".assets/green-04.png"},
      {class: "green-5", href: ".assets/green-05.png"},
      {class: "green-6", href: ".assets/green-06.png"},
      {class: "green-7", href: ".assets/green-07.png"},
      {class: "green-8", href: ".assets/green-08.png"},
      {class: "green-9", href: ".assets/green-09.png"},
      {class: "green-10", href: ".assets/green-10.png"},
      {class: "green-jack", href: ".assets/green-jack.png"},
      {class: "green-queen", href: ".assets/green-queen.png"},
      {class: "green-king", href: ".assets/green-king.png"},
      {class: "red-A", href: ".assets/red-01.png"},
      {class: "red-2", href: ".assets/red-02.png"},
      {class: "red-3", href: ".assets/red-03.png"},
      {class: "red-4", href: ".assets/red-04.png"},
      {class: "red-5", href: ".assets/red-05.png"},
      {class: "red-6", href: ".assets/red-06.png"},
      {class: "red-7", href: ".assets/red-07.png"},
      {class: "red-8", href: ".assets/red-08.png"},
      {class: "red-9", href: ".assets/red-09.png"},
      {class: "red-10", href: ".assets/red-10.png"},
      {class: "red-jack", href: ".assets/red-jack.png"},
      {class: "red-queen", href: ".assets/red-queen.png"},
      {class: "red-king", href: ".assets/red-king.png"},
    ];
  }

  instantiatePlayer(player) {
    var player = new Player(wins, hand);
    // I realize this will need more, but I already know I will need it to play the game!
  }


  shuffleDeck() {
    // look up Fisher-yates shuffle??
    // or just shuffling in general?
    // or can I just use the random function from romcom?
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function shuffle(cardDeck) {
    for (var i = cardDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var tempArray = cardDeck[i];
        cardDeck[i] = cardDeck[j];
        cardDeck[j] = tempArray;
    }
    this.cardDeck = cardDeck[j]; //when I was testing this, I used a return, but I think this is what I want to do.
};
// this is what I found for Fisher-yates shuffle. I understand it for the most part.
// I don't understand array[j] fully though. Ask Taras!

  dealHand() {
    // Need to research but this method might be part of shuffleDeck()?
    
  }

  updateGamePile() {
    // this will return the last card played (by either player)
    // ie: a randomly drawn card from the playerDetails.hand array
    // DOM: this will need to be called in main.js to update html 'game-pile' element
  }

  updatePlayerTurn() {
    // this will limit which keys will have event listeners (q, f OR p, j)
    // will also update which playerDetails.hand array will be pulled from for play()
    // DOM: will this need update a visual of who's turn it is?
  }

  play() {
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
