//array
const myArr = [1,2,3,"A",true] //can use mix dataType and resizable
console.log(myArr[1]);

//Shallow copy: call by reference(share same references)
//Deep copy: call by value(do not share same reference)

const myLords = ["RAM","SHAM","SHIV"]
const myArr2 = new Array(12,34,56,78,90)
console.log(myLords[1]);
console.log(myArr2[3]);

myArr2.push(6)
myArr2.push(67)
myArr2.pop()

myArr2.unshift(1000) //here if 0001 will be printed as 1
console.log(myArr2);

myArr2.shift()
console.log(myArr2);
console.log(myArr2.includes(99));
console.log(myArr2.indexOf(12));

const newArr = myArr2.join()
console.log(myArr2);
console.log(newArr);
console.log(typeof(myArr2)); //object
console.log(typeof(newArr)); //string

//...................................
//slice and spice

console.log("A", myArr2);
const myn1 = myArr2.slice(1,3) //slice me end index include nahi hota hai and main array me koi change nahi hota
console.log(myn1);
console.log("B",myArr2);//main array me koi change nahi hua


const myn2 = myArr2.splice(1,3) //splice me end address include hota hai and main array me bhi splice wale index wale elements hat jate hai saare
console.log(myn2);
console.log("C",myArr2); //main array me splice wale elements hat gaye hai












