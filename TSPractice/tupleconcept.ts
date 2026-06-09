//tuple vs array
//array:dynamic:runtime more value scan be added
//tuple:fixed size and order matters &  APPLICABLE only to TS

let person:[string,number]=["shilpa", 108];
let user:[string,number, boolean]=["shilpa", 108, true];


//fetch the value
console.log(person[0]);
console.log(person[1]);
console.log(user[2]);

//adding multiple values
let data:[string,number][]=[["shilpa", 108],["achyutha", 108]];
console.log(data[0]);//[ 'shilpa', 108 ]
console.log(data[0][0]);//shilpa
console.log(data[1][0]);//achyutha

let customer:[string,number]=["shilpa", 108];
//at the time of declaring oNOT possible but through PUSH we can do it
//let customer:[string,number]=["shilpa", 108,"Dwaraka",108)];
customer.push("Dwaraka",108);
console.log(customer);









