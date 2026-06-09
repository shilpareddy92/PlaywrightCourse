//TS is a statically a typed language
//Type Inference
//Type Annotations


//explicitly we are defining the type of the variables
let age:number;//Type Annotation
let firstname: string;

firstname="shilpa";
//firstname =10;//Type 'number' is not assignable to type 'string'.
//age =true;//Type 'boolean' is not assignable to type 'number'.
age =10.5;

let num:number =50;
console.log(num);


let test="TS";

console.log(test);

console.log(typeof test);// decided at CT
//Type Inference

let billAmount =6000; //Type Inference
let isActive:boolean=true; //Type Inference
isActive=false;
//isActive=undefined;//Type 'undefined' is not assignable to type 'boolean'.

//null and undefined
let city:null=null;
let country:undefined=undefined;
console.log(city)
console.log(country)


//any
let value:any=80;
value ="dev";
value= true;


//void :if function declared as void,
// it cannot return anything
function printHello(){//return type -- void
    console.log("void without mentioning")
    return;//this is also valid;usually we dont do
}

function printHello1():void {//return type -- void
     console.log("void with mentioning")
}

printHello();
printHello1();

function getNumber():number{
    return 123;
        //return "shilpa";//Type 'string' is not assignable to type 'number'.
}

function getAny():any{
    return 123;
        //return "shilpa";//Type 'string' is not assignable to type 'number'.
}

console.log(getAny());

function addition(a: number, b: number){
    return a+b;
}

function multiplicaton(a:number, b:number):number {
    return  a*b;
}


console.log(addition(10,20));
console.log(multiplicaton(2,3));


