"use strict";
//print 1 to 10
for (let i = 1; i <= 10; i++) {
    //console.log(i);
}
for (let j = 0; j <= 10; j = j + 2) {
    //console.log(j);
}
//for in
let array = [5, 6, 7, 2, 3];
for (let num in array) {
    //console.log(num)//it will print index
    //console.log(array[num])//it will print numbers
}
//for of
for (let num of array) {
    //clear
    // clearconsole.log(num);
    if (num === 6)
        break;
}
let info = "Hello World";
for (let c of info) {
    //console.log(c);
}
//while loop
//1 to 10
let p = 1;
while (p <= 10) {
    //clearconsole.log(p);
    p++;
}
//use cased for while loop:
//when number of iteration are NOT FIXED
//1.infinite scrolling:zomato, swiggy,linked in page untill the post or restaurant
//2.wait for apge loading:app takes 2/5/10 seconds)No idea on numbe of iterations
//wait for the specifi element on the page
//calender handling:
//webtable pagination 1 2 3 4 ...next
//use cased for for loop:
//when number of iteration are FIXED
//drop down:month Jan to dec 1to 12(Array/AL)
//Do while => at least one execution
let d = 1;
do {
    console.log(d);
    d++;
} while (d >= 10);
