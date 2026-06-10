"use strict";
//arrow functions:=> fat arrow orlambda function
//anonymous function with out name
let hello = () => {
    console.log("Hello method");
};
hello();
//curly braces are NOT mandatory but GOOD PRACTICE
let printInnfo = () => console.log("Print method");
printInnfo();
let withParameters = (a, b) => console.log(a + b);
withParameters(2, 3);
let withReturn = (a, b) => {
    return a + b; // curly braces is mandatory
};
console.log(withReturn(3, 5));
let addition = (a, b) => a + b; // curly braces and no return values
console.log(withReturn(30, 50));
class Person {
    firstName;
    age;
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    display = () => {
        console.log(this.firstName + "  " + this.age);
    };
}
let p = new Person("Tom", 30);
p.display();
