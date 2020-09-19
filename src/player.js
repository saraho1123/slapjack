class Player {
  constructor(id, wins, hand) {
    this.id = id;
    this.wins = wins;
    this.hand = [];
  }

  playCard() {
    return this.hand.shift();
    console.log(this.hand);
  }

  saveWinsToStorage() {
    // JOSN and local storage! Yay!
  }
}
