//card library that can be used for multiple games
class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards =[];
  };

  generate_deck() {
    let card = (suit,value) => {
      this.name = value + ' of ' + suit;
      this.suit = suit;
      this.value = value;

      return{name:this.name, suit: this.suit, value: this.value};

    };
    
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",];
    const suits = ["H", "C", "D", "S"];
    
    for ( let s = 0; s < suits.length; s++) {
      for ( let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]))
      };
    };
  };

  shuffle () {
    let current_ind = this.deck.length, temp_val, rand_ind;

    while (0 != current_ind) {
      rand_ind = Math.floor(Math.random() * current_ind);
      current_ind -= 1;
      temp_val = this.deck[current_ind];
      this.deck[current_ind] = this.deck[rand_ind];
      this.deck[rand_ind] = temp_val;
    };
  };

  deal () {
    let dealt_card = this.deck.shift();
    this.dealt_cards.push(dealt_card);
    return dealt_card
  };

  replace () {
    this.deck.unshift(this.dealt_cards.shift());
  };

  clear_deck() {
    this.deck = [];
  };
};

let deck = new Deck;


let gameStarted = false,
playerWon = false,
gameOver = false,
playerHand = [],
dealerHand = [],
playerIn = 0;

function newGame() {
  deck.generate_deck();
  deck.shuffle();
//issue the player and dealer their first two cards
  playerIn = 0;
  deck.deal()
  deck.deal()
  playerHand = [deck.dealt_cards.pop(), deck.dealt_cards.pop()];
  gameStatus(handValue(playerHand));
  playerIn = 1;
  deck.deal()
  deck.deal()
  dealerHand = [deck.dealt_cards.pop(), deck.dealt_cards.pop()];
  playerIn = 0;
  gameStatus(handValue(dealerHand));
};

function pdeal () {
  deck.deal();
  playerHand.push(deck.dealt_cards.pop());
  gameStatus(handValue(playerHand));
};

function pstay () {
  playerIn = 1
}

function gameStatus () {
  switch(handValue()) {
    case handValue >= 21: 
      return gameOver = true; 
    default: gameOver = false;
  } 
}

function handValue (array) {
  for(let i = 0; i < array.length; i++) {
    
    let card = array[i].value;
    cardValue(card);
    valArray = [];
    return valArray.push(cardValue);
  }

  return handValue = valArray.reduce((a, b) => a + b, 0);
}

function cardValue (card) {
  switch (card) {
    case "A":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    default:
      return 10;
}



/*
deck.generate_deck();
deck.shuffle();
newGame();
console.log(playerHand);
*/