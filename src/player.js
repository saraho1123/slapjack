class Player {
  constructor(id, hand) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    return this.hand.shift();
  }

  saveWinsToStorage() {
    // JOSN and local storage! Yay!
  }
}
