
/*Type 'number' is not assignable to type 'void'.
let number:void =100;wrong
let number:void =null;wrong
let number:void =undefined*/

function getInfo(mssg :string):void{
    //return 123;
    console.log(mssg)
}

getInfo("Hi! TS");
