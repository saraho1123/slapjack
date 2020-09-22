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

    // console.log(localStorage.getItem('totalWins'));
    // // JOSN and local storage! Yay!
    // // Psuedocode:
    // // need to declare a var and assign it to the wins with JSON parsed
    // // I think I can us a param and pass thru the wins with an argumnt in newButton
    // // I also need to make a return from storage function in main.js
    // pastWins.push(this.wins);
    // var wins = JSON.stringify(pastWins);
    // localStorage.setItem('allWins', wins)

    // consider a button to clear local storage (Clear Wins)
    // consider inputs for player names and save names and wins count.
    // add a name property to Player
    // Would need to make my code more generic (player1 and player2)
  }
}
