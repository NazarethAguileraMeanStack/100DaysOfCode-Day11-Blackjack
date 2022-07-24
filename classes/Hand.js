class Hand {
    _hand = [];
    constructor() {

    }

    get Hand() {
        return this._hand;
    }

    addToHand(card) {
        this._hand.push(card);
    }

    showHand() {
        let hand = "";
        for (let i = 0; i < this._hand.length; i++) {
            hand += `${this.Hand[i].Face} ${this.Hand[i].Suite}`;
            if (i !== this.Hand.length - 1) {
                hand += ", "
            } 
        }
        return hand;
    }

    showComputerHand() {
        return `${this.Hand[0].Face} ${this.Hand[0].Suite}`;
    }

    containsAce() {
        let aceFound = false;
        for (let i = 0; i < this.Hand.length; i++) {
            if (this.Hand[i].Face === "A") aceFound = true;
        }
        return aceFound;
    }

}

module.exports = Hand;