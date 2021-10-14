//document.getElementById("count-el").innerText = 0
/*
let firstBatch = 5
let secondBatch = 7
let count = firstBatch + secondBatch
 console.log(count)
*/
/*
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")   // "count-el" это передать аргумент pass in argument
let count = 0

console.log(saveEl)

function increment () {
   
    count = count + 1                               // or count +=1
    countEl.textContent = count
    
}


function save () {
let countStr = count + "-"
saveEl.textContent += countStr            // вместо и лучше чем innerText чтобы показывало спрятанные пробелы и др символы
countEl.textContent = 0
count = 0
    

}
save()

*/


/*
let name = "Lolita"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
//console.log(myGreeting)
*/
/*
let welcomeEl = document.getElementById("welcome-el")
let name = "Lolita"
let greeting = "Hi, my name is "
welcomeEl.innerText = greeting + name
welcomeEl.innerText += " 😀"               // or welcomeEl.innerText = welcomeEl.innerText + "😀"

*/
/*
let myPoints = 3
function add3Points() {
    myPoints += 3
}

function remove1Points() {
   myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoints)
*/
/*
let errorP = document.getElementById("error")
console.log(errorP)

function purchase() {
    console.log("button clicked")
    errorP.textContent = "Something went wrong!"
}
*/
/*
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumIt = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumIt.textContent = "Sum: " + result
 
}

function substract() {
    let result = num1 - num2
    sumIt.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumIt.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumIt.textContent = "Sum: " + result
}

add()
substract()
divide()
multiply()
*/
/*
let firstCard = 1
let secondCard = 20

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log("Do you want another card?")
} else if (sum === 21) {
    console.log("Wohoo! You won!")
} else {
    console.log("You're out")
}

*/
/*
let age = 100
console.log(age)

if(age < 100) {
    console.log("Not eligible")                         /// === или == это равно и не путать с = 
} else if (age === 100) {
console.log("Here is your birthday card from the King!")
} else {
    console.log("Not eligible, you have already gotten one")
}

*/

/*
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

if(false) {
    console.log("Do you want to draw a new card?")
    
} else if (true) {
    console.log("Wohoo! You've got Blackjack!")
    
} else  {
    console.log("You're out of the game")
}

*/



let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]      // array ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el") or так как ниже более динамично
 let sumEl = document.querySelector(".sum-el")
 let cardsEl = document.querySelector("#cards-el")

 function getRandomCard() {
     return 5
 }

 function startGame(){
      renderGame()
 }

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
if(sum <= 20) {
    message = "Do you want to draw a new card"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
    
} else {
    message = "You're out of the game"
    isAlive = false
    
}
 
 messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()   
}


