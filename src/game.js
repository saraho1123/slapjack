class Game {
  constructor(playerHand) {
    this.playerIsaac = playerHand.isaac;
    this.playerMom = playerHand.mom;
    this.cardDeck = []; // array of cards (possibly an array of objects?);
    this.gamePile; // I think this needs to be assigned in the updateGamePile()
  }

  shuffleDeck() {
    // look up Fisher-yates shuffle??
  }

  dealHand() {
    // Need to research but this method might be part of shuffleDeck().
  }

  updateGamePile() {
    // this will return the last card played (by either player)
    // ie: a randomly drawn card from the player.hand array
    // DOM: this will need to be called in main.js to update html 'game-pile' element
  }

  updatePlayerTurn() {
    // this will limit which keys will have event listeners (q, f OR p, j)
    // will also update which player hand array will be pulled from for play()
    // DOM: will this need update a visual of who's turn it is?
  }

  play() {
    // this will simply (I hope) randomly pull a card from one players hand array.
    // also I think it makes more sense to run this function BEFORE updateGamePile()
  }

  updateWins() {
    // this will hold the conditions for a win:
    // f or j keyup when a jack, double or sandwich is in the gamePile
    // when win condition is met, update the win for that player1
    // I am thinking:
    // an f keyup would give a win to isaacPlayer
    // a j keyup would give a win to momPlayer
    // update this in player.wins class.
    // DOM: display winner statment and update win counter <p>
  }

  resetDeck() {
    // this needs to remove cards from gamePile array and run shuffleDeck()
    // and possible dealHand() ?
    // DOM: update game-pile element, winner statement element
  }

}
