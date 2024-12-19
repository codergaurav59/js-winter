/*
1) Primitive: call by value (Stack memory)
   7 types: String, Number, Boolean, null, undefined, Symbol, bigInt

2) Non Primitive: Reference (Heap memory)
   Arrays, Objects, Functions ->  Inn sabh ka typeof = object but funtion ka funtion object
*/

let value; //undefined
//or 
//let value = undefined

let id = Symbol("123")
let anotherId = Symbol("123")

console.log(id == anotherId);
let a = true
let b = Number(a)
let bigNum = 12345674334345n

const heros = ["HANUMAN", "SHAKTIMAN", "IRONMAN"]

let myObj = {
    name: "India",
    age: 77,
}

const myFunction = function(){
    console.log("India");
}

console.log(typeof(myObj));
//null -> object
//undefined -> undefined
//



