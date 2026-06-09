// enum:Enumeration
//data type in TS, holds the set of constants
//three types of Enum types
//string, number and heterogenous(numeric and string)

//Numeric
enum Browser{
    //Chrome = getVersion("chrome"), error
    Firefox,
    Safari,
    Edge,
    Chrome=getVersion("chrome")
}

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
enum Payment{
    Razorpay=5,
    creditcard,
    netbanking,
    Cash
}

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
enum user{
    offline=5,
    online=10
}
console.log(user);
/**
 * { '5': 'offline', '10': 'online', offline: 5, online: 10 }
 */


function getVersion(browserName:String):number{
    if(browserName ==="chrome"){
        return 115;
    }
    return -1;
}

console.log(getVersion("Chrome"));//-1
console.log(getVersion("chrome"));//115
console.log(Browser.Chrome)//115
console.log(Browser.Firefox)//0

//String Enum:
enum environment
{
    DEV="dev",
    QA="qa",
    STAGE="stage",
    PROD="prod"

}

console.log(environment.DEV);//dev
console.log(environment["QA"]);//qa


//Heterpgenous
enum Status{
    ACTIVE ='active',
    DEACTIVE = 1,
    PENDING
}

console.log(Status)
/**{
  '1': 'DEACTIVE',
  '2': 'PENDING',
  ACTIVE: 'active',
  DEACTIVE: 1,
  PENDING: 2
} */



