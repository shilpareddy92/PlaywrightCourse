"use strict";
//function is block of logical code
//it can return void/number/string
//it can take parameters
//named function
function getInfo() {
    //0 parameters
    console.log("Hello Info Function");
}
getInfo();
//named function
function addition(a, b) {
    // parameterized
    console.log(a + b);
}
addition(10, 20); //call by value´-- árguments are 10, 20
let x = 120, y = 40;
addition(x, y); //call by refrence
//return we can add or no need
//function calNumbers( a:number,b:number,c:number){
function calNumbers(a, b, c) {
    // parameterized
    let total = a + b - c;
    return total; //returning number
}
calNumbers(x, y, 90);
function isUSerActive(userName) {
    if (userName == "Shilpa") {
        console.log(`Hello ${userName}`);
        return true;
    }
    else {
        console.log("User is NOT ACTIVE");
        return false;
    }
}
isUSerActive("Shilpa");
// no need to mention void and void & return can not go together
//2.Anonymous function - without name function
//store in a variable:
//call it bz using the variable name only
let hello = function () {
    console.log("Hello");
};
hello();
let sum = function (x, y) {
    return x + y;
};
console.log(sum(1, 2));
