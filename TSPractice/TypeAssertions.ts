/**
 * Type assertion in TS, is a way to tell the TS compiler
 * that you know more about the  type of value than 
 * it(compiler) does
 */

//1.using <>
let totalBill:any=123;
console.log(typeof totalBill);
let finalBill= <number>totalBill+200;
console.log(typeof finalBill);
console.log(finalBill);

//using as keyword
let someValue:any= "Hello Shilpa";
let len= (someValue as string).length;
console.log(len);

let flag:any=true;
if(flag as boolean){
    console.log("Type assertions");
}