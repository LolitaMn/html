/*var number = 15;
if(number == 5) {
    console.log("ok");
} else if(number < 10) {
console.log("ok!");
}
else if(number == 7)   // если выполнения всего 1 то можно фигурноые скобки не ставить
console.log("no");
else if(number >= 15) 
console.log(">=15");
else {
console.log("else");
}*/


/*var number = 15;
var isHasHouse = true;
if(number == 5 && isHasHouse == true) /* или просто "isHasHouse", а если пишем false то можно "!isHasHouse")*/              // (|| OR)  (&& And)
/*console.log("ok");
else if(number < 10) 
console.log("ok!");

else if(number == 7)  
console.log("no");
else if(number > 15) 
console.log(">=15");
else 
console.log("else"); */

/*var stroka = "word1";
switch(stroka) {
    case "4": 
    console.log("переменная со значением 4");
break;             
case "45":
    console.log("Переменная равна 45");
 break;
 case "word":
     console.log("word");
     break;   // :и break - buhf.n hjkm фигурных скобок в этом операторе 
   default:
       console.log("Default");
} */


/*
var arr = [5, true, "stroka", 5.7, -100];     //или так  new Array() это массивы
/*console.log(arr);
console.log(arr[0]);

arr[3] = "word"; {
console.log(arr[3]);
console.log(arr.length);
} 

*/

/*var matrix = [                             // это многомерные массивы
[4, 6, 8], ["stroka", 5.7,], [0, -100]
];
matrix[1][0] = 90;
console.log(matrix);  
*/



/*for(var i  = 100; i > 5; i /=2) {    // Для перебора массивов. В циклах работают с числами. Фиг скобки не обязательны при ед., но всегда прописывают
console.log(i)
}
*/

/*var j = 1000;                             
while(j > 100) {                          // While для проверки некого условия. Фигурные скобки обязательны
console.log(j);
    j-=100;

}


var isHasCar = true;
while(isHasCar == true) {         // это бесконечный цикл так как условие удовлетвореноб не запускать бесконечный цикл так как комп зависнет. 
}
*/



/*var x = 0;
do {                             // do while когда нужно сначала выполнить потом проверить условие.
console.log(x);
x++;
} while(x < 10);
*/


/*for(var i = 10; i <= 20; i+=2) {
    if(i > 15)
    break;
    
    console.log(i);
}
*/


/*for(var i = 10; i <= 20; i++) {
    if(i % 2 == 0)
    continue;                                  // условный оператор в циклах
    
    console.log(i);
} */


/*var arr = [5, 7, 3, 8, 9, 91];

for(var i = 0; i < arr.length; i++) {                        // перебор массива
    arr[i] *= 2;
    console.log("Элемент: " + (i + 1) + ": " + arr[i]);
} 
*/


//alert("Погода норм");
//confirm("Вы дома?");

/*var  data = confirm("Вы дома");
console.log(data); */

/*var  data = confirm("Вы дома?");
if(data) {
    alert("вы молодец!");
}
*/

//prompt("Сколько вам лет,скажите, 20");

/*var data = prompt("Сколько вам лет, скажите");
console.log(data);
*/

/*var person = null;
if(confirm("Вы уверены?")) {
person = prompt("введите ваше имя");
alert("Привет, " + person);
} else {
    alert("Вы нажали отмена");

}
*/


/*
function info(word) {
    console.log(word + "!");
    
}

function summa(a, b) {
var res = a + b;
info(res);
}

summa(5, 7);
*/

/*
function summa(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) 
    sum += arr[i];

 return sum;
    
}

var array = [6, 8, 1];

 var res = summa(array);
 console.log("result" + res);
 */

 /*
 var num = 10;

 function info() {
     var num = 20;
     console.log(num);
 }

 info();

 console.log(num);
 */


 /*var counter = 0;

 function onClickButton(el) {
     counter++;
     el.innerHTML = "you had click" + counter;
     //el.style.background = "red";
     //el.style.color = "blue";

     el.style.cssText= "border-radius: 5px; border: 0; font-size: 20px";
 }

 function onInput(el) {
     if(el.value == "Hello")
     alert("you too");
     console.log(el.value);
 }
 */

/*
 var text = document.getElementById('text');
text.title = "New text";
 console.log(text.title);


 text.style.color = "red";
 text.style.backgroundColor = "blue";

 text.innerHTML = "New<br>string";


 //document.getElementById('text').style.color = "white";

 //var spans = document.getElementsByTagName('span');

 /*
 var spans = document.getElementsByClassName('simple-text');
 for( var i = 0; i < spans.length; i++) {
     console.log(spans[i].innerHTML);
 }
*/

document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value; 
    var state = el.state.value;                      // или document.getElementById('name').value;
//console.log(state + "-" + pass + "-" + repass);

var fail = "";
if(name == "" || pass == "" || state == "")
 fail = "Fill all fields, please";
else if(name.length <= 1 || name.length > 50)          //  (|| - это символ "или")
  fail = "Fill correct name";
else if(pass != repass)
 fail = "passwords doesn`t match"
else if(pass.split("&").length > 1) 
 fail = "Incorrect password";

 if(fail != "") {
     document.getElementById('error').innerHTML = fail;
return false;
 } else  {
     alert("Everything filled  correct")
     window.location = 'https://google.com';
     
 }

}


/*
var stop = setInterval(my_func, 1000);

var counter = 0;
function my_func() {
    counter++;
    console.log("Counter:" + counter);

    if(counter == 3)                                            интервалы
    clearInterval(stop);
}
*/

/*
var counter = 0
setInterval(function(){
counter++;
console.log("Sec ago:" + counter);
}, 1000);
*/

/*                                                                таймеры
setTimeout(my_func, 2000);
    
    function my_func() {
console.log("timer is working");                      
}
*/


//var date = new Date();
//console.log(date.getFullYear());
//console.log(date.getMonth() + 1);
//console.log(date.getDate());
//console.log(date.getHours());
//console.log(date.getMinutes());
//console.log(date.getSeconds());

/*
date.setHours(23);
date.setMinutes(23);
console.log("Time:" + date.getHours() + ":" + date.getMinutes());
*/

//var arr = [90, 1, 5, 7, 8, 9];
//console.log(arr.length);
//console.log(arr.join(","));
//console.log(arr.sort());
//console.log(arr.reverse());
//console.log(arr.reverse().join(","));

/*var stroka = arr.reverse().join(",");
console.log(stroka.split(","));
*/

class Person {
    constructor(name, age, happiness) {
this.name = name;
this.age = age;
this.happiness;
    }

    info() {
        console.log("Human:" + this.name + ". Age:" + this.age);
    }
}

var alex = new Person('Alex', '45', 'true');
var bob = new Person('Bob', '25', 'false');

alex.name = 'alex2';
alex.info();
bob.info();


//console.log(alex.name);
//console.log(bob.name);