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

var matrix = [                             // это многомерные массивы
[4, 6, 8], ["stroka", 5.7,], [0, -100]
];
matrix[1][0] = 90;
console.log(matrix);