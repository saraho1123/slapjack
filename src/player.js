class Player {
  constructor(wins, hand) {
    // this.id = Date.now();
    this.wins = wins; // this probably needs to be an interger!
    this.hand = []; // I think I need a method in game? that shuffles and deals the hands
                // and assigns it to playerDetails.hand.
  }

  playCard() {
    // I think this should update the game-pile as well as the hand that played a card
    // This should actually just update this.hand!
  }

  saveWinsToStorage() {
    // JOSN and local storage! Yay!
  }
}
