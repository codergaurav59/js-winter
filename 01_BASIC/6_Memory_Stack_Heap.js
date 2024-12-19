//Stack : Primitive: call by value
//Heap : Non Primitive: call by reference

let a = 10
let b = a

b = 20

console.log(a);
console.log(b);

let Obj1 = {
    name : "India",
    age : 60,
}

let Obj2 = Obj1

Obj2.age = 40 //here Obj1 will also cahnge as it is using heap memory : call byb reference

console.log(Obj1);
console.log(Obj2);



