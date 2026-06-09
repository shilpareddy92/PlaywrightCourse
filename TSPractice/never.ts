//never means nothing it does not indicate any value
//we cannot assign any value to never type of variable
let nothing:never;

//A function returning 'never' cannot have a reachable end point.t
function throwError(mssg:string):never{
        throw new Error(mssg);
}

//throwError("some error");//Error: some error

//generate some infinite loop
/* function displayMssg():never{
    while(true){
        console.log("welcome Shilpa");
    }
}

displayMssg(); */
