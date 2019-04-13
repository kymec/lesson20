"use strict"
//Задание 1
function fib(n){
    var a = 1, b = 1, result;
    if (n > 2){
        for (var i = 2; i < n; i++){
            result = a + b;
            a = b;
            b = result;
        }
        return result;
    } else if (n == 1 || n == 2){
        return 1;
    } else{
        return null;
    }
    
}
console.log(fib(7));

//Задание 2
var n = 1000, num = 0;
while(n >= 50){
    n /= 2;
    num++;
}
console.log(num);