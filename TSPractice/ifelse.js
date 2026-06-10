"use strict";
let flag = false;
if (flag) {
    console.log("pass");
}
else {
    console.log("fail");
}
let x = 10, y = 20;
if (x > y) {
    console.log("x > y");
}
else {
    console.log("x < y");
}
//< > <= >= === !=
//if elseif
let a = 500, b = 900, c = 300;
if (a > b && a > c) {
    console.log("A is greatest");
}
else if (b > c) {
    console.log("B is greatest");
}
else
    console.log("C is greatest");
//Ternnary operator
let i = 100;
let j = 200;
i > j ? console.log("i > j") : console.log("i < j");
let browser = "firefox";
browser === "chrome"
    ? console.log("open chrome browser")
    : browser == "firefox"
        ? console.log("open firefox browser")
        : console.log("Please pass the right browser");
