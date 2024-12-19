const name = "INDIA"
const age = 60

console.log("Name is " +  name + " And age is " + age + ".")
console.log(`Name is ${name} And age is ${age}.`);

const gameName = new String('IndiaNation')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));
const gamekanam = gameName.substring(1,4) //here 4th index is not included in substring
console.log(gamekanam);

const anothergName = gameName.slice(-12,4)
console.log(anothergName);

//but if we will give -ve index to the substring then it will take it as a 0 index

const nayiBaat = "  abc  dv   "
console.log(nayiBaat.trim());

const xyz = "abcd 123-hij"
console.log(xyz.replace('123','efg'));
console.log(xyz);
console.log(xyz.includes(123)); ///yaha '123' likhe bina bhi kam ho ja raha
console.log(xyz.includes('abc'));
console.log(xyz.split(' '));
console.log(xyz.split('-'));








