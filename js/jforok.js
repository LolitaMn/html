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