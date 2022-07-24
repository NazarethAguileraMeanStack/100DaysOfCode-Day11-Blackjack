const Card = require("./Card");

class Deck {
    _deck = [];

    constructor() { 
    }

    initNewDeck() {
        this._deck = [];
        this._deck.push(new Card("2", 2, "hearts"));
        this._deck.push(new Card("3", 3, "hearts"));
        this._deck.push(new Card("4", 4, "hearts"));
        this._deck.push(new Card("5", 5, "hearts"));
        this._deck.push(new Card("6", 6, "hearts"));
        this._deck.push(new Card("7", 7, "hearts"));
        this._deck.push(new Card("8", 8, "hearts"));
        this._deck.push(new Card("9", 9, "hearts"));
        this._deck.push(new Card("10", 10, "hearts"));
        this._deck.push(new Card("J", 10, "hearts"));
        this._deck.push(new Card("Q", 10, "hearts"));
        this._deck.push(new Card("K", 10, "hearts"));
        this._deck.push(new Card("A", 11, "hearts"));

        this._deck.push(new Card("2", 2, "diamonds"));
        this._deck.push(new Card("3", 3, "diamonds"));
        this._deck.push(new Card("4", 4, "diamonds"));
        this._deck.push(new Card("5", 5, "diamonds"));
        this._deck.push(new Card("6", 6, "diamonds"));
        this._deck.push(new Card("7", 7, "diamonds"));
        this._deck.push(new Card("8", 8, "diamonds"));
        this._deck.push(new Card("9", 9, "diamonds"));
        this._deck.push(new Card("10", 10, "diamonds"));
        this._deck.push(new Card("J", 10, "diamonds"));
        this._deck.push(new Card("Q", 10, "diamonds"));
        this._deck.push(new Card("K", 10, "diamonds"));
        this._deck.push(new Card("A", 11, "diamonds"));

        this._deck.push(new Card("2", 2, "clubs"));
        this._deck.push(new Card("3", 3, "clubs"));
        this._deck.push(new Card("4", 4, "clubs"));
        this._deck.push(new Card("5", 5, "clubs"));
        this._deck.push(new Card("6", 6, "clubs"));
        this._deck.push(new Card("7", 7, "clubs"));
        this._deck.push(new Card("8", 8, "clubs"));
        this._deck.push(new Card("9", 9, "clubs"));
        this._deck.push(new Card("10", 10, "clubs"));
        this._deck.push(new Card("J", 10, "clubs"));
        this._deck.push(new Card("Q", 10, "clubs"));
        this._deck.push(new Card("K", 10, "clubs"));
        this._deck.push(new Card("A", 11, "clubs"));


        this._deck.push(new Card("2", 2, "spades"));
        this._deck.push(new Card("3", 3, "spades"));
        this._deck.push(new Card("4", 4, "spades"));
        this._deck.push(new Card("5", 5, "spades"));
        this._deck.push(new Card("6", 6, "spades"));
        this._deck.push(new Card("7", 7, "spades"));
        this._deck.push(new Card("8", 8, "spades"));
        this._deck.push(new Card("9", 9, "spades"));
        this._deck.push(new Card("10", 10, "spades"));
        this._deck.push(new Card("J", 10, "spades"));
        this._deck.push(new Card("Q", 10, "spades"));
        this._deck.push(new Card("K", 10, "spades"));
        this._deck.push(new Card("A", 11, "spades"));

    }

    shuffleDeck() {
        for (let i = this._deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
        }
    }

    hit() {
        let card = this._deck.pop();
        return card;
    }
}


module.exports = Deck;