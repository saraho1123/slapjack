

class Game {
  constructor(playerDetails) {
    this.playerIsaac = playerDetails; // I am not sure how to assign these just yet. Or if they
    this.playerMom = playerDetails; //
    // this.cardDeck = []; // array of cards (possibly an array of objects?) I put this below for now;
    this.gamePile; // I think this needs to be assigned in the updateGamePile()

  // I think I want my cardDeck to be an array of objects so that it is easy to
  // translate it to the DOM when the time comes. I put href, but I'm thinking I'll
  // need to change this to src??

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

  instantiatePlayer(player) {
    var player = new Player(wins, hand);
    // I realize this will need more, but I already know I will need it to play the game!
  }

  // function getRandomIndex(array) {
  //   return Math.floor(Math.random() * array.length);
  // }

  shuffleDeck(deckToShuffle) {
    // look up Fisher-yates shuffle??
    // or just shuffling in general?
    // or can I just use the random function from romcom?
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

  dealHand(shuffledDeck) {
    for (var i = 0; i < shuffleDeck.length; i++) {
      if (shuffleDeck[i] % 2 == 0) {
        this.playerIsaac.hand.push(shuffledDeck[i])
      } else {
        this.playerMom.hand.push(shuffledDeck[i])
      }
    }
    // Need to research
    // FOR LOOP through shuffled cardDeck array.
    // % to deal
    // could this be a splice or slice? to remove half the cards from cardDeck
    // and push into one players hand and then the rest into the other?
    // push into playerDetails.hand
  }

  updateGamePile() {

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
