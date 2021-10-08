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

let firstName = "Tim"
let lastName = "Dino"

let fullName = firstName + " " + lastName
console.log(fullName)