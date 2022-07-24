const prompt = require("prompt-Sync")({ sigint: true });
const Deck = require("./classes/Deck");
const Hand = require("./classes/Hand");
const gameplay = require("./gameplay");

function main() {
    let playAgain = "y";
    while (playAgain === "y") {
        let deck = new Deck();
        let playerHand = new Hand();
        let computerHand = new Hand();
    
        gameplay.initGame(deck, playerHand, computerHand);
    
        let isDisqualified = gameplay.hitOrStay(playerHand, deck);
        if (isDisqualified) {
            console.log("Over 21! - You Lose");
        } else {
            gameplay.diplayHand("Your Final Hand", playerHand.showHand());
            gameplay.diplayHand("Computer Final Hand", computerHand.showHand());
            gameplay.determineWinner(playerHand, computerHand);
        }
        playAgain = prompt("Play Again? 'y' or 'n'");
        if (playAgain !== "y") break;
    }
}

main();