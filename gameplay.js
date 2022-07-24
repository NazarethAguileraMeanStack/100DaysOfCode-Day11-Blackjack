const prompt = require("prompt-sync")({ sigint: true });

function displayIntroArt() {
    console.clear();
    const introArt = `
    _     _            _    _            _    
    | |   | |          | |  (_)          | |   
    | |__ | | __ _  ___| | ___  __ _  ___| | __
    | '_ \\| |/ _\\\` |/ __| |/ / |/ _\\\` |/ __| |/
    | |_) | | (_| | (__|   <| | (_| | (__|   < 
    |_.__/|_|\\__,_|\\___|_|\\_\\ |\\__,_|\\___|_|\\_\\
                           _/ |                
                          |__/       `;
    console.log(introArt);
    console.log("Welcome to BlackJack!");
}

function getPlayerScore(player) {
    let playerScore = 0
    for (let i = 0; i < player.Hand.length; i++) {
        playerScore += player.Hand[i].Value;
    }
    return playerScore;
}

function over21(score, playerHand) {
    if (score > 21) {
        if (playerHand.containsAce()) {
            score -= 10;
            if (score > 21) return true;
        } else {
            return true;
        }
    } 

    return false;
}


/* ---------------------Exported Functions ------------------------- */

function displayHand(message, hand) {
    console.log(`${message}: [${hand}]`);
}

function hitOrStay(playerHand, deck) {
    console.log("\n");
    let playerHitOrStay = "hit";
    let isDisqualified = false;
    while (playerHitOrStay === "hit") {
        playerHitOrStay = prompt("hit or stay? ");
        if (playerHitOrStay === "hit") playerHand.addToHand(deck.hit());
        if (playerHitOrStay === "stay") break;
        displayHand("Your Cards", playerHand.showHand());
        let playerScore = getPlayerScore(playerHand);
        isDisqualified = over21(playerScore, playerHand);
        if (isDisqualified) break;

    }
    return isDisqualified;
}

function determineWinner(playerHand, computerHand) {
    console.log("\n");
    let playerScore = getPlayerScore(playerHand);
    let computerScore = getPlayerScore(computerHand);
    if (playerHand.containsAce() && playerScore > 21) playerScore -= 10;
    if (computerHand.containsAce() && computerScore > 21) computerScore -= 10;
    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins");
    } else {
        console.log("Draw");
    }
}

function initGame(deck, player, computer) {
    displayIntroArt();
    deck.initNewDeck();
    deck.shuffleDeck();
    computer.addToHand(deck.hit());
    player.addToHand(deck.hit());
    computer.addToHand(deck.hit());
    player.addToHand(deck.hit());

    displayHand("Your Cards", player.showHand());
    displayHand("Computer Shown Card", computer.showComputerHand());
}


exports.diplayHand = displayHand;
exports.hitOrStay = hitOrStay;
exports.determineWinner = determineWinner;
exports.initGame = initGame;