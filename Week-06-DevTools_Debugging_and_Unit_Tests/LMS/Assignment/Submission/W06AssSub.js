class Card {
  constructor(name, value, deckNumber) {
    this.name = name;
    this.value = value;
    this.deckNumber = deckNumber;
  }

  describe() {
    return `[${this.value}] ${this.name} *${this.deckNumber}*`;
  }
}

class Deck {
  constructor() {
    this.deckArray = [];
    this.shuffledDeckArray = [];
  }

  describe() {
    return `Cards Left: ${this.deckArray.length} `;
  }

  describeDeckArray() {
    let n = 1;
    return this.deckArray.forEach((element) => console.log(n++, element.describe()));
  }

  createDeck() {
    let n = 0;
    let suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    while (this.deckArray.length != 52) {
      n = n + 1;
      for (let index = 0; index < suits.length; index++) {
        const suit = suits[index];
        if (n == 13) {
          let card = new Card(`K ${suit}`, 10, Math.ceil(Math.random() * 52));
          this.deckArray.push(card);
        } else if (n == 12) {
          let card = new Card(`Q ${suit}`, 10, Math.ceil(Math.random() * 52));
          this.deckArray.push(card);
        } else if (n == 11) {
          let card = new Card(`J ${suit}`, 10, Math.ceil(Math.random() * 52));
          this.deckArray.push(card);
        } else {
          let card = new Card(
            `${this.deckArray.length + 1} ${suit}`,
            n,
            Math.ceil(Math.random() * 52)
          );
          this.deckArray.push(card);
        }
      }
    }
    return console.log("deck generated!");
  }

  shuffle() {
    this.deckArray.sort((a, b) => a.deckNumber - b.deckNumber);
    let str = 'deck shuffle complete!';
    return console.log(str);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = [];
  }

  describePoints() {
    let sum = 0;
    return this.points.forEach((element) => sum += element)
  }
}

const deck = new Deck();
deck.createDeck();
deck.shuffle();
// let n = 0;
// let suits = ["Diamonds", "Clubs", "Hearts", "Spades"]
// while (deckArray.length != 52) {
//   n = n + 1;
//   for (let index = 0; index < suits.length; index++) {
//     const suit = suits[index];
//     if (n == 13) {
//       let card = new Card(`K ${suit}`, 10, Math.ceil(Math.random() * 52));
//       deckArray.push(card);
//       console.log(card.describe());
//     } else if (n == 12) {
//       let card = new Card(`Q ${suit}`, 10, Math.ceil(Math.random() * 52));
//       deckArray.push(card);
//       console.log(card.describe());
//     } else if (n == 11) {
//       let card = new Card(`J ${suit}`, 10, Math.ceil(Math.random() * 52));
//       deckArray.push(card);
//       console.log(card.describe());
//     } else {
//       let card = new Card(`${deckArray.length} ${suit}`, n, Math.ceil(Math.random() * 52));
//       deckArray.push(card);
//       console.log(card.describe());
//     }
//   }
// }
