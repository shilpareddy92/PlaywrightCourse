"use strict";
//TS provides the concept of function overloading
// we can have multiple functions 
// 1.with same name
//2.but different parameter types and return type.
//3.However, the number of parameters should be the same.
// need to implement with function body this only once:
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add(10, "shilpa"));
console.log(add("Shilpa", 20));
console.log(add("Hello ", "shilpa"));
