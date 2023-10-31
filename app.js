let firstCard = 4
let secondCard = 2
let cardsSum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    cardsEl.textContent += " " + firstCard + " " + secondCard
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

function newCard() {
    console.log("Drawing a new card from the deck !")
    

}
