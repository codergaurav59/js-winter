//singleton : constructor se banae toh
//Object.create 
// or 
//const User = new Object()

const mySym = Symbol("Key1")
//Non Singleton Object
//Object literals
const  JsUser = {
    name: "Ram",
    "full name": "Ram Sharma",
    //mySym: "key1", this will not be treated as Symbol
    [mySym]: "Key1",
    age: 18,
    location: "India",
    isLoggedin: true,
    lastLoginDays: ["Sunday","Monday"]
}

console.log(JsUser.age);
console.log(JsUser["age"]);

//console.log(JsUser."full name");//this is not right -> gives error
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof(mySym));
console.log(typeof(JsUser[mySym]));



JsUser.name = "Sham"
//Object.freeze(JsUser)
//JsUser.name = "Shiv" //this will not happen as JsUser is freezed
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello boy");
}

JsUser.greeting2 = function(){
    console.log(`Hello boy ${this.name}`);
}

console.log(JsUser.greeting);//[Funtion (autonomous)]
console.log(JsUser.greeting());
console.log(JsUser.greeting2());











