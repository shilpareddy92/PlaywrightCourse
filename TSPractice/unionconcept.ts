//union type use with  variables
//variable can be multiple types like string also and number also
let userID: string | number;
userID = 10001;
userID = "naveenautomation";
//userID =true

function getUserInfo(customerID: string | number) {
  if (typeof customerID === "number") {
    return 9001 + "_Shilpa";
  } else if (typeof customerID === "string") {
    return  "_Shilpa";
  }
}

console.log(getUserInfo(123));
console.log(getUserInfo("123"));
//console.log(getUserInfo(true));
