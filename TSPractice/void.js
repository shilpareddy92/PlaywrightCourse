"use strict";
/*Type 'number' is not assignable to type 'void'.
let number:void =100;wrong
let number:void =null;wrong
let number:void =undefined*/
function getInfo(mssg) {
    //return 123;INVALID
    console.log(mssg);
    //return; VALID
}
getInfo("Hi! TS");
