class Player {
  constructor(wins, hand) {
    this.id = Date.now();
    this.wins = wins;
    this.hand = // I think I need a method in game? that shuffles and deals the hands.
  }

  playCard() {
    // I think this should update the game-pile as well as the hand that played a card
  }

  saveWinsToStorage() {

  }
}
