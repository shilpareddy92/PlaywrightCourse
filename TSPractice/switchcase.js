"use strict";
let day = "monday";
let result;
switch (day.toLowerCase()) {
    case "sunday":
        result = "Sunday";
        break;
    case "monday":
        result = "Monday";
        break;
    case "tuesday":
        result = "Tuesday";
        break;
    case "wednesday":
        result = "Wednesday";
        break;
    case "thursday":
        result = "Thursday";
        break;
    case "friday":
        result = "Friday";
        break;
    case "saturday":
        result = "Saturday";
        break;
    default:
        result = "Invalid day";
}
console.log(result);
//fall down happens with out the break
let number = 3.13; //3 also valid
let output;
switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        output = "number between 0-5";
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        output = "number between 6-10";
        break;
    default:
        output = "number is > 10";
}
console.log(output);
//switch case with enums
var Browser;
(function (Browser) {
    Browser["Firefox"] = "firefox";
    Browser["Safari"] = "safari";
    Browser["Edge"] = "edge";
    Browser["Chrome"] = "chrome";
})(Browser || (Browser = {}));
let browser;
browser = Browser.Chrome; // assigned later
let browseResult;
switch (browser) {
    case Browser.Firefox:
        browseResult = "Firefox Browser";
        break;
    case Browser.Safari:
        browseResult = "Safari Browser";
        break;
    case Browser.Edge:
        browseResult = "Edge Browser";
        break;
    case Browser.Chrome:
        browseResult = "Chrome Browser";
        break;
    default:
        browseResult = "Unknown Browser";
}
console.log(browseResult);
/*use cases
1.RBAC:admin, user, seller,partner, vendor, cart manager
2.multi environmnets:DEV, QA, STAGE,UAT,PROD
3.cross borwser logic
4.reading multiple JSON/XML/EXCEL files
*/
