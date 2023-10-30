let firstCard = 4
let secondCard = 8
let cardsSum = firstCard + secondCard


if (cardsSum < 21) {
    console.log("Do you want to draw a new card??")
} else if (cardsSum === 21) {
    console.log("you've got a blackjack")
} else (cardsSum > 21); {
    console.log("You're out of the game!")
}