"use strict";
// enum:Enumeration
//data type in TS, holds the set of constants
//three types of Enum types
//string, number and heterogenous(numeric and string)
//Numeric
var Browser;
(function (Browser) {
    //Chrome = getVersion("chrome"), error
    Browser[Browser["Firefox"] = 0] = "Firefox";
    Browser[Browser["Safari"] = 1] = "Safari";
    Browser[Browser["Edge"] = 2] = "Edge";
    Browser[Browser["Chrome"] = getVersion("chrome")] = "Chrome";
})(Browser || (Browser = {}));
console.log(Browser.Chrome);
console.log(Browser);
/**
 * 0
{
  '0': 'Chrome',
  '1': 'Firefox',
  '2': 'Safari',
  '3': 'Edge',
  Chrome: 0,
  Firefox: 1,
  Safari: 2,
  Edge: 3
}
 */
console.log(Browser[0]);
// we can customize and always +1 incremental order
var Payment;
(function (Payment) {
    Payment[Payment["Razorpay"] = 5] = "Razorpay";
    Payment[Payment["creditcard"] = 6] = "creditcard";
    Payment[Payment["netbanking"] = 7] = "netbanking";
    Payment[Payment["Cash"] = 8] = "Cash";
})(Payment || (Payment = {}));
console.log(Payment);
/*{
  '5': 'Razorpay',
  '6': 'creditcard',
  '7': 'netbanking',
  '8': 'Cash',
  Razorpay: 5,
  creditcard: 6,
  netbanking: 7,
  Cash: 8
}*/
// we can customize and give random to all payments
var user;
(function (user) {
    user[user["offline"] = 5] = "offline";
    user[user["online"] = 10] = "online";
})(user || (user = {}));
console.log(user);
/**
 * { '5': 'offline', '10': 'online', offline: 5, online: 10 }
 */
function getVersion(browserName) {
    if (browserName === "chrome") {
        return 115;
    }
    return -1;
}
console.log(getVersion("Chrome")); //-1
console.log(getVersion("chrome")); //115
console.log(Browser.Chrome); //115
console.log(Browser.Firefox); //0
//String Enum:
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment.DEV); //dev
console.log(environment["QA"]); //qa
//Heterpgenous
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status);
