"use strict"
//Задание 1
function fib(n){
    var a = 1, b = 0, result;
    for (var i = 0; i < n; i++){
        result = a + b;
        a = b;
        b = result;
    }
    return result;    
}
console.log(fib(7));

//Задание 2
var n = 1000, num = 0;
while(n >= 50){
    n /= 2;
    num++;
}
console.log(num);