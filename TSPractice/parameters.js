"use strict";
//mandatory parameters
function getInfo(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getInfo("Shilpa", "Vallapureddy")); //Shilpa Vallapureddy
//optionla parameters
function getPersonalInfo(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getPersonalInfo("Shilpa")); //Shilpa undefined
//Default parameters
function setDetails(name, mssg = "Welcome") {
    return mssg + " " + name;
}
console.log(setDetails("Shilpa")); //Welcome Shilpa
console.log(setDetails("Shilpa", "Hello")); //Hello Shilpa
console.log(setDetails("Shilpa", undefined)); //Hello Shilpa
