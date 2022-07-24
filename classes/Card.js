class Card {
    constructor(face, value, suite) {
        this._face = face;
        this._value = value;
        this._suite = `of ${suite}`;
    }

    set Face(val) {
        this._face = val;
    }

    get Face() {
        return this._face;
    }

    set Value(val) {
        this._value = val;
    }

    get Value() {
        return this._value;
    }

    set Suite(val) {
        this._suite = val;
    }

    get Suite() {
        return this._suite;
    }
}

module.exports = Card;