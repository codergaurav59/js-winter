// >, <, >= , <=, ==, ===, !=, !==

// 2 == "2" true
// 2 === "2" false //beacause yeh datatype bhi check karta hai

// Operators : &&, || Same as cpp

//NULLISH COALESCING OPERATOR(??) null and undefined, value me na aae isslie use karte hai yeh
/*
let val1;
val = 5 ?? 10 //val1 is 5
val = null ?? 20  //val1 is 20
val = undefined ?? 30  // val1 is 30
val1 = null ?? undefined ?? 40 // val1 is 40
val1 = null ?? 50 ?? 60 // val1 is 60
*/


//Ternary Operator
// condition ? true : false
const price = 110
price >= 100 ? console.log("GREATER THAN 100") : console.log("LEASS THAN 100")




//Falsi Values: false, 0, -0,BigInt On, "" ,null, undefined, NaN
//Truthy Values: "0", "false" , 'false' , [] , {} , function(){}

// false == 0      //true
// false == ''     //true
// 0 == ''         //true


//so array ko check karne ke lie uski length check karni hogi
let arr = []
if(arr.length === 0) console.log("array is Empty");

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) console.log("Object is empty");


//if( 3 == "3") console.log("test1") , console.log("test2"); //yeh bhi ho jaega execute but bad code for reading

//Switch
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
} */

let month = 3
switch (month) {
    case 1:
        console.log("Januarary");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default: console.log("Other half of year");
        break;
}

