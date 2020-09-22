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



  saveWinsToStorage() {
    // JOSN and local storage! Yay!
  }
}
