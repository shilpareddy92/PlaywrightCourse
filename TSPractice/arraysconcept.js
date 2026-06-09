"use strict";
let array = [1, 2, 3, 4, 5];
console.log(typeof array);
let names = ["shilpa", "vallapureddy"];
console.log(names[0]);
//using generics:
let empNames = ["shilpa", "priya"];
let empIds = [103, 104];
let empInfo = ["address", "phonenumber", 30];
//can we multi typa array
let values = ["address", "phonenumber", 30];
//let value :(string  | number)[]=["address", "phonenumber", 30,true];
//first array declaration and initialize
let users;
users = ["Peter", "Naveen"];
let employees = ["shilpa", "priya", "santhosh"];
//iterate the array:use for loop
//1.index bases loop
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
//2.for in loops
for (let e in employees) {
    console.log(employees[e]);
    //console.log(e)
}
