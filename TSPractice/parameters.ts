//mandatory parameters
function getInfo(firstName:string, lastName:string){
     return firstName +" "+lastName;
}
console.log(getInfo("Shilpa", "Vallapureddy"));//Shilpa Vallapureddy

//optionla parameters
function getPersonalInfo(firstName:string, lastName?:string){
     return firstName +" "+lastName;
}
console.log(getPersonalInfo("Shilpa"));//Shilpa undefined

//Default parameters
function setDetails(name:string, mssg:string="Welcome"):string{
    return mssg + " "+name;

}

console.log(setDetails("Shilpa"));//Welcome Shilpa
console.log(setDetails("Shilpa","Hello"));//Hello Shilpa
console.log(setDetails("Shilpa",undefined));//Welcome Shilpa





