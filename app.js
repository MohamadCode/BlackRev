let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let cardsSum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


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
    } else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message
    
}



function newCard() {
    console.log("Drawing a new card from the deck !")
    let card = getRandomCard()
    cardsSum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}


