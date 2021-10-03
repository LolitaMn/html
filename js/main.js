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

var person = null;
if(confirm("Вы уверены?")) {
person = prompt("введите ваше имя");
alert("Привет, " + person);
} else {
    alert("Вы нажали отмена");

}