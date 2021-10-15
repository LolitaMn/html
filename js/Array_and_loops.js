/*
let featuredPosts = [
    "Check my netflix code",          //0
    "here's the code of my project",   //1
    "i've just relauched my portfolio"  //2
]
/*
console.log(featuredPosts[0])
console.log(featuredPosts[1])
console.log(featuredPosts[2])

console.log(featuredPosts.length)
*/
/*
let me = ["it specialis", 29, true]

let cards = [7, 4]

cards.push(5)
console.log(cards)


let message = ["hey, bro", "hy you too", "ok!"]

let newMessage = "Same here!"

message.push(newMessage)
console.log(message)

message.pop()
console.log(message)
*/
/*
//     Start           finish      step size
for (let count = 1; count < 11; count += 1) {
    console.log(count)
}

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}
*/


// let messages = [
//     "Hey, how`s it going?",
//     "All good.Been working on my portfolio lately",
//     "I'm great,thank you! And you?",
//     "Same here!",
//     "Great here",
//      "Go"
// ]

// //console.log(messages[0])
// //console.log(messages[1])
// //console.log(messages[2])
// //console.log(messages[3])


// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }



// let cards = [7, 3, 9]
//                               //or i++
// for (let i = 0; i < cards.length; i += 1 ) {
//     console.log(cards[i])
// }


// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.querySelector("#greeting-el")


// for (let i = 0; i < sentence.length; i++ ){
//     greetingEl.textContent += sentence[i] + " "
// }


//   let player1Time = 102
//   let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


// function totalRaceTime (){
//     return player1Time + player2Time
    
// }

// let timeTotal = totalRaceTime()
// console.log(timeTotal)

//let randomNumber = Math.random() * 6   //дает числа от 0 включая 0,999 ; * 6 дает от 0 включая 5,999 
//let flooredNumber = Math.floor(3,45632) // удаляет цифры после запятой, вместо 3 можно любое число

//console.log(randomNumber)
//console.log(flooredNumber)

// let rNumber = Math.floor(Math.random() * 6 ) + 1 // floor удаляет все десятичные из random в итоге получаем 012345; и +1 это увеличиваем цифры до 6
// console.log(rNumber)

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1
//     return dice
// }

// console.log( rollDice() )

// let hasCompletedCourse = true
// let givesCertificat = true

//  if (hasCompletedCourse === true && givesCertificat === true) {
//      generateCertificate()
//  }

// function generateCertificate() {
//     console.log("Generating certificate.....")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false
//                               //And
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution() 
// }

// function showSolution () {
//      console.log("Showing the solution.....")
// }


// let hasCompletedCourse = true
// let givesCertificat = true
//                                //OR
//  if (hasCompletedCourse === true || givesCertificat === true) {
//      generateCertificate()
//  }

// function generateCertificate() {
//     console.log("Generating certificate.....")
// }


// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//      recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film!")
// }


   // Это объект
// let course = {               
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]                            // массив в объекте
// }
// console.log( course.tags )


// let castle = {
//     title: "live like king",
//     isSuperHost: true,
//     price: 150,
//     images: ["img/castle1.png","img/castle2.png", "img/castle3.png", "img/castle1.png"]

// }

// console.log( airbnb.title )
// console.log( airbnb.images )


// let person = {
//     name: "Lolita",
//     age: 29,
//     counry: "Armenia"
// }

// function logData() {
//   console.log( person.name + " is " + person.age + " years old and lives in " + person.country )

// }
// logData() 

let age = 15 

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
}else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior")
}