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
    this.players = [];
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
            `${n} ${suit}`,
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
  
  addPlayer(name) {
    let player = new Player(name);
    this.players.push(player)
    return console.log(this.players[this.players.indexOf(player, 0)].describe());
  }

  dealCards() {
    this.players.forEach((element) => element.cards = this.deckArray.splice(0, 26));
    return console.log("cards have been given to players!");
  };
  
  gameStart() {
    
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = [];
  }

  describe() {
    return `${this.name} Points: ${this.points}`
  }

  describePoints() {
    let sum = 0;
    return this.points.forEach((element) => sum += element)
  }

  describeCards() {
    let n = 0;
    return this.cards.forEach((element) => console.log(n++, element))
  }
}

const deck = new Deck();
deck.createDeck();
deck.shuffle();
deck.addPlayer('jose');
deck.addPlayer('notJose');
deck.dealCards();

let n = 0;
while (deck.players[0].cards.length != 0) {
  n++;
  console.log(`--------------
  Round ${n}`);
  let deck1 = deck.players[0].cards;
  let deck2 = deck.players[1].cards;
  console.log(`${deck1[0].name} > ${deck2[0].name}`)
  if (deck1[0].value > deck2[0].value) {
    deck.players[0].points.push(1);
    console.log(`player1 Won this round!`)
  }
  else if (deck1[0].value < deck2[0].value) {
    deck.players[1].points.push(1);
    console.log(`player2 Won this round!`)
  } 
  else if (deck1[0].value = deck2[0].value) {
    console.log(
      `${deck.players[0].points.length} -vs- ${deck.players[1].points.length}`
    );
  } 
  
  if (deck.players[0].points.length > deck.players[1].points.length) {
    console.log(`player1 is ahead with ${deck.players[0].points.length}!`)
  }
  else if (deck.players[0].points.length < deck.players[1].points.length) {
    console.log(`player2 is ahead with ${deck.players[1].points.length}!`);
  }
  else if (deck.players[0].points.length = deck.players[1].points.length) {
    console.log(
      deck.players[0].points.length + ' points tied ' + deck.players[1].points.length
    );
  }
  deck1.shift();
  deck2.shift();
  
}
console.log(`--------------
Game Results`);
if (deck.players[0].points.length > deck.players[1].points.length) {
  console.log(`player1 Won this game with ${deck.players[0].points.length} points!`)
}
else if (deck.players[0].points.length < deck.players[1].points.length) {
  console.log(
    `player2 Won this game with ${deck.players[1].points.length} points!`
  );
}
else if (deck.players[0].points.length = deck.players[1].points.length) {
  console.log(`player1 tied player2 this game with ${deck.players[0].points.length} points!`)
};