class Player {
  constructor(id, hand) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.slapped = false;
    this.wonThisHand = false;
  }

  playCard() {
    return this.hand.shift();
  }

  updateWins() {
    this.wins++;
    this.wonThisHand = true;
  }

  resetPlayerDetails() {
  this.hand = [];
  this.slapped = false;
  this.wonThisHand = false;
}

  saveWinsToStorage() {
    // JOSN and local storage! Yay!
    // consider a button to clear local storage (Clear Wins)
    // consider inputs for player names and save names and wins count.
    // add a name property to Player
    // Would need to make my code more generic (player1 and player2)
  }
}
