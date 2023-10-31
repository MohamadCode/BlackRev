let firstCard = 4
let secondCard = 2
let cardsSum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    sumEl.textContent += " " + cardsSum
    
    if (cardsSum <= 21) {
        message = "Do you want to draw a new card??"
    } else if (cardsSum === 21) {
        message = "you've got a blackjack"
    } else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message
    
}

