//GLOBAL SCOPE:
//let a = 1
//const b = 2
//var c = 3

if(true){
    //LOCAL SCOPE
    let a = 10
    const b = 20 
    var c = 30 //var ka scope pure me hota isslie iska use nahi karte YEH KEVAL LOCAL SCOPE ME HONE PAR BHI PRINT HO JATA
}

console.log(c);

//console.table({a,b,c});

let one = 1000
const two = 2000
var three = 3000
if(true){
    let one = 1
    const two = 2
    var three = 3
    console.log("IN THE BLOCK:");
    console.table({one,two,three})
}

console.log("Outside the block");
console.table({one,two,three})

