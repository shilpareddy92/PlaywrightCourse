"use strict";
//union type use with  variables
//variable can be multiple types like string also and number also
let userID;
userID = 10001;
userID = "naveenautomation";
//userID =true
function getUserInfo(customerID) {
    if (typeof customerID === "number") {
        return 9001 + "_Shilpa";
    }
    else if (typeof customerID === "string") {
        return "_Shilpa";
    }
}
console.log(getUserInfo(123));
console.log(getUserInfo("123"));
