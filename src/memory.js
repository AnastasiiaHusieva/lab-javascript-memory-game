class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]]
      }
    
    
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
      this.pairsClicked++
    
      if (card1 === card2) {
        this.pairsGuessed++
        return true
      } else {
        return false
      }
    }

  checkIfFinished() {
    // ... write your code here
    const totalPairs = this.cards.length / 2
    return this.pairsGuessed === totalPairs
  }
}
