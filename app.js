let player = {
    name: "A51",
    chips: 145
}
let cards = []
let cardsSum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

console.log(cards)

playerEl.textContent = player.name + ": $" + player.chips




function getRandomCard() {
    let randomnumeros = Math.floor( Math.random() * 13 ) + 1

    if (randomnumeros > 10) {
        return 10
    }
     else if (randomnumeros === 1 ) {
        return 11
    } else {
        return randomnumeros
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    cardsSum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: " 

    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " "
        
    }

    sumEl.textContent = "Sum: " + cardsSum
    
    if (cardsSum <= 21) {
        message = "Do you want to draw a new card??"
    } else if (cardsSum === 21) {
        message = "you've got a blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}



function newCard() {

   if (isAlive === true && hasBlackJack === false) {
    
        let card = getRandomCard()
        cardsSum += card
        cards.push(card)
        renderGame()

   }
}


