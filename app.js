let firstCard = 4
let secondCard = 20
let cardsSum = firstCard + secondCard





function startGame() {
    
    if (cardsSum <= 21) {
        console.log("Do you want to draw a new card??")
    } else if (cardsSum === 21) {
        console.log("you've got a blackjack")
    } else {
        console.log("You're out of the game!")
    }
}

