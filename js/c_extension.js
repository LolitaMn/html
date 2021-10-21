let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

console.log( localStorage.getItem("myLeads"))

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {                                                                     // const li = documnet.getElementById("li")
       //listItems += "<li><a target= '_blank' href='"+ myLeads + "'>" + myLeads[i] + "</a></li>"                  // li.textContent = myLeads[i]                 // ulEl.append(li)                                                               
       listItems += ` 
       <li>
       <a target= '_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
       </li>
    `  
    }                                                                                                             
        ulEl.innerHTML = listItems
  
}   
    