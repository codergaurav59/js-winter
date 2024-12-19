let myDate = new Date()
console.log(typeof(myDate));

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

let mynewDate = new Date(2024,0,19) // 19 Jan 2024  (yaha 0->Jan and 11->Dec and if 12->Jan)
//let mynewDate = new Date(2024,12,19,5,3)  //19 Jan 2024 5:03:00 AM
//let mynewDate = new Date("2024-12-19")  // YYYY-MM-DD  19 Dec 2024 (yaha 1->Jan)
//let mynewDate = new Date("12-19-2024") // MM-DD-YYYY
console.log(mynewDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mynewDate.getTime());
console.log(Math.floor(Date.now()/1000)); //in seconds

console.log(mynewDate.getMonth()+1);

console.log(mynewDate.getDay()); //5th day

console.log(mynewDate.toLocaleString('default',{
    weekday: "long",
}));







