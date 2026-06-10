let flag: boolean = false;
if (flag) {
  console.log("pass");
} else {
  console.log("fail");
}

let x: number = 10,
  y: number = 20;
if (x > y) {
  console.log("x > y");
} else {
  console.log("x < y");
}

//< > <= >= === !=
//if elseif
let a: number = 500,
  b: number = 900,
  c: number = 300;
if (a > b && a > c) {
  console.log("A is greatest");
} else if (b > c) {
  console.log("B is greatest");
} else console.log("C is greatest");

//Ternnary operator
let i: number = 100;
let j: number = 200;
i > j ? console.log("i > j") : console.log("i < j");

let browser: string = "firefox";
browser === "chrome"
  ? console.log("open chrome browser")
  : browser == "firefox"
    ? console.log("open firefox browser")
    : console.log("Please pass the right browser");
