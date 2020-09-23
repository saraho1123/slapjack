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

  saveWinsToStorage(isaacWins, momWins) {
    var currentWins = [];
    currentWins.push(isaacWins);
    currentWins.push(momWins);
    var persistWins = JSON.stringify(currentWins);
    localStorage.setItem('totalWins', persistWins);
  }
}
