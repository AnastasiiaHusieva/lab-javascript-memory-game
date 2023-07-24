const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  let canFlip = true

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('turned') && !card.classList.contains('blocked') && canFlip) {
        card.classList.add('turned');
        const cardName = card.getAttribute('data-card-name');
        memoryGame.pickedCards.push(cardName);
        if (memoryGame.pickedCards.length === 2) {
          const [card1, card2] = memoryGame.pickedCards;
          const isPair = memoryGame.checkIfPair(card1, card2);
          if (!isPair) {
            canFlip = false; // Disable flipping temporarily
            setTimeout(() => {
              const turnedCards = document.querySelectorAll('.card.turned');
              turnedCards.forEach((turnedCard) => {
                turnedCard.classList.remove('turned');
              });
              memoryGame.pickedCards = [];
              canFlip = true; // Re-enable flipping after timeout
            }, 1000);
          } else {
            const matchedCards = document.querySelectorAll(`.card[data-card-name="${card1}"]`);
            matchedCards.forEach((matchedCard) => {
              matchedCard.classList.add('blocked');
            });
            memoryGame.pickedCards = [];
            if (memoryGame.checkIfFinished()) {
              alert('Congratulations! You won the game!');
            }
          }
        }
      }
    });
  });
});
