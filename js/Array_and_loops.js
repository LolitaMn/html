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

let rNumber = Math.floor(Math.random() * 6 ) // floor удаляет все десятичные из random в итоге получаем 012345
console.log(rNumber)