//TS provides the concept of function overloading
// we can have multiple functions 
// 1.with same name
//2.but different parameter types and return type.
//3.However, the number of parameters should be the same.

//TS supports overload signatures at compile time.
//JS (the generated code) still has only one implementation at runtime.

//provide the implementation/prototype of the function
function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:number,b:string):string;
function add(a:string,b:number):string;


// need to implement with function body this only once:
function add(a:any,b:any):any{
    return a+b;
}

console.log(add(10,20));//30
console.log(add(10,"shilpa"));//10shilpa
console.log(add("Shilpa",20));//Shilpa20
console.log(add("Hello ", "shilpa"))//Hello shilpa