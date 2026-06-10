"use strict";
/**
 * Type assertion in TS, is a way to tell the TS compiler
 * that you know more about the  type of value than
 * it(compiler) does
 */
//1.using <>
let totalBill = 123;
console.log(typeof totalBill);
let finalBill = totalBill + 200;
console.log(typeof finalBill);
console.log(finalBill);
//using as keyword
let someValue = "Hello Shilpa";
let len = someValue.length;
console.log(len);
let flag = true;
if (flag) {
    console.log("Type assertions");
}
