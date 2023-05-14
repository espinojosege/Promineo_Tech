class Card {
  constructor(name, value, deckNumber) {
    this.name = name;
    this.value = value;
    this.deckNumber = deckNumber;
  }

  describe() {
    return `[${this.value}] ${this.name} *${this.deckNumber}*`;
  }
/* 
Declared a new class named Card which takes parameters of name, value, and deckNumber. Name will have value of suits concatenated with it's value as a string.
Parameter value, will hold the number value of the card, for example, a Queen of Diamonds would have a value of 10 in my game. The parameter deckNumber will
be a random number generated between 1-52 that will allow a sort function for each element to be able to "shuffle" the deck from it's creation. The describe method
will return a string with it's values, mostly used this method for debugging. 
*/
}

class Deck {

/* 
Declared a new class named Deck which will have most of the game code that is needed. constructor will not take any parameters but will declare arrays needed for the game.
Array players will have the players and deckArray will contain the cards in the beginning. Start() method will just call all the code for the game to be able to begin.
That way I can just call the start() method once without typing all the methods needed to run the game. Describe method would return the number of cards left in the array.
Used this mostly for debugging. Also the same thing with describeDeckArray() was mostly used for debugging. Came pretty useful!
*/
  constructor() {
    this.deckArray = [];
    this.players = [];
  }

  start() {
    deck.createDeck();
    deck.shuffle();
    deck.addPlayer("jose");
    deck.addPlayer("notJose");
    deck.dealCards();
    deck.gameStart();
  }
  describe() {
    return `Cards Left: ${this.deckArray.length} `;
  }

  describeDeckArray() {
    let n = 1;
    return this.deckArray.forEach((element) => console.log(n++, element.describe()));
  }
/* 
CreateDeck is the actual place where the deck is generated. I have created a while loop that checks to see if there is 52 elements inside the array deckArray.
If it is not a array with 52 elements, it will begin to create the deck. I set n to equal zero first because I needed it for debugging when I first created it.
I was able to name the J and the Q and the K properly with the help of the n variable because since each iteration of the while loop creates four cards,
I am able to use the n value to name all the suits at once. This was very useful. If you read the if statements you can tell that I just needed one number to name four.
After the while loop has finished its iteration from the if statements, it then goes ahead and pushes the new card created to the deck array. Since technically the while loop
made four cards each rotation, the for loop inside the while loop was able to create one card at a time. That meant that each card could have a random value for the
deckNumber parameter needed to create the instance of the class Card. I was able to add that random value at creation. Once everything is generated I logged out a message
saying that the deck was generated.
*/

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

/* 
Declared a new method called shuffle() which was called after the creation of the deck. This method uses the .sort array method to 
sort the deck by lowest to highest value of the card instance card.decknumber value which was 1-52. And yes there appears to be that some
cards have the same number, but it just sorts the first number encountered first, then the second is second, if they all contain the same
number it just sorts it in order of which one came first. After it is sorted, I logged out a message saying the sorting is done!
*/
  

  shuffle() {
    this.deckArray.sort((a, b) => a.deckNumber - b.deckNumber);
    let str = 'deck shuffle complete!';
    return console.log(str);
  }
  
/*  
declared a new method of class Deck named addPlayer() which creates an instance of class Player. The names were set in the start() method already, but they are dynamic.
After the instance of class Player has been created, it is added to the array players of the deck instance of class Deck. After it is finished, logs out a message
with the name of the player and the points of the player.
*/
  addPlayer(name) {
    let player = new Player(name);
    this.players.push(player)
    return console.log(this.players[this.players.indexOf(player, 0)].describe());
  }

/*  
declared a new method of class Deck named dealcards() which is basically using the .splice array method to equally split the array of deckArray in between both players.
I used the forEach array method because that way I can just use one line. Since splice removes those elements from the array, I didn't need to rewrite it to split the 
array to the second player because the first element was already a different element. I split the array of 52 cards to 26 cards to each player. After this method is done,
the deckArray will remain empty. Returned a string to the console after the cards were dealt to the players.
*/
  dealCards() {
    this.players.forEach((element) => element.cards = this.deckArray.splice(0, 26));
    return console.log("cards have been given to players!");
  };

/*  
declared a new method of class Deck named gameStart() which is where the game really starts. First i created a variable to equal 0 to keep track of the turns.
declared a while loop that makes sure that the players actually have cards to play. The while loop checks the length of player1's deck array. which holds 26 elements.
logs out the round first, then declares variables to  equal each deck respectively. Then this is where the game starts, first I console out the names of the cards being
compared, then I create an if statement which actually compares the value of the cards. I used object notation in order to achieve this. declaring the decks was very
useful. I only needed to add the object notation to reach my desired goal. The first if statements compares the values of the cards to player1 if it is greater than
player 2. If it is greater than player 2, it is added a point. A point is pushed into the points array. The second if statements does the same thing but for player2. 
If player two's card is greater than player1's card, then player2 will add a point to it's points array. The last if statement, compares if both values are equal. 
Nobody gets points if they are both equal. and It logs out the points of each player since nobody received a point. Thats the end of the game basically. Next are the 
second ifs statements which I will explain below.
*/

  gameStart() {
    let n = 0;
    while (deck.players[0].cards.length != 0) {
      n++;
      console.log(`--------------
  Round ${n}`);
      let deck1 = deck.players[0].cards;
      let deck2 = deck.players[1].cards;
      console.log(`${deck1[0].name} > ${deck2[0].name}`);
      if (deck1[0].value > deck2[0].value) {
        deck.players[0].points.push(1);
        console.log(`player1 Won this round!`);
      } else if (deck1[0].value < deck2[0].value) {
        deck.players[1].points.push(1);
        console.log(`player2 Won this round!`);
      } else if ((deck1[0].value = deck2[0].value)) {
        console.log(
          `${deck.players[0].points.length} -vs- ${deck.players[1].points.length}`
        );
      }
      /*  
here the second if statements compare the points of each player, each turn. Also it logs out weather in that specific round, which player has the lead.
Which can be different than which player won the round. Each turn will reflect who is on the lead no matter if they win or loose the turn. If they are
tied, It will log out each other points like when they tied for comparing values each round. It was useful having an array of points because it is
in the .length array method that has how many rounds each player has won. This is different from the rounds total which is 26.
*/
      if (deck.players[0].points.length > deck.players[1].points.length) {
        console.log(`player1 is ahead with ${deck.players[0].points.length}!`);
      } else if (
        deck.players[0].points.length < deck.players[1].points.length
      ) {
        console.log(`player2 is ahead with ${deck.players[1].points.length}!`);
      } else if (
        (deck.players[0].points.length = deck.players[1].points.length)
      ) {
        console.log(
          deck.players[0].points.length +
            " points tied " +
            deck.players[1].points.length
        );
      }

/*  
Here I have used the shift() array method to remove the first element of the array every times a round finishes. This is very useful because
I did not have to rewrite the comparing for each element since shift() array method removes the first item of each array. I was able to keep
the comparison with just the [0] array index. Finally the game ends!! The if statements compare the length of each array of points for each player.
It doesn't have to add up anything because each round gave each player one point. This means that the length of the array is equal exactly to the 
number of points won. It will log out which player one, with how many points and with how many rounds won.
*/
      deck1.shift();
      deck2.shift();
    }
    console.log(`--------------
Game Results`);
    if (deck.players[0].points.length > deck.players[1].points.length) {
      console.log(
        `player1 Won this game with ${deck.players[0].points.length} points! player2 Lost this game with ${deck.players[1].points.length} points!`
      );
    } else if (deck.players[0].points.length < deck.players[1].points.length) {
      console.log(
        `player1 Lost this game with ${deck.players[0].points.length} points! player2 Won this game with ${deck.players[1].points.length} points!`
      );
    } else if (
      (deck.players[0].points.length = deck.players[1].points.length)
    ) {
      console.log(
        `player1 with ${deck.players[0].points.length} points tied player2 this game with ${deck.players[1].points.length} points!`
      );
    }
  }
}


/*  
Declared new class Player which creates a player when invoked. This constructor only has one parameter, name. It also has the array cards which will hold the cards when
the dealer deals the cards from the main deck. Also the array points which tally up the rounds won. The describe method returns a string with the player name and the amount
of points. I used this class specifically for the test mocha/chai part of the assignment.
*/

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.points = [];
  }

  describe() {
    return `${this.name} Points: ${this.points.length}`
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

/* 
Here will create a new instance of class Deck, named deck lowercase. Then we invoke the start() method of deck. in order for the game to start.
*/

const deck = new Deck();
deck.start();