//document.getElementById("count-el").innerText = 0
/*
let firstBatch = 5
let secondBatch = 7
let count = firstBatch + secondBatch
 console.log(count)
*/


let countEl = document.getElementById("count-el")   // "count-el" это передать аргумент pass in argument
let count = 0
function increment () {
   
    count = count + 1
    countEl.innerText = count
    
}


function save () {
    console.log(count)
}
save()
