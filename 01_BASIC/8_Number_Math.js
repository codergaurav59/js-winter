const score = 100
const balance = new Number(200)

console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 124.5
console.log(otherNum.toPrecision(2));

const hundread = 10000000
console.log(hundread.toLocaleString('en-In'));


console.log(Math)
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.0001)); //gives 5
console.log(Math.floor(4.999)); //gives 4

console.log(Math.min(1,2,3,8,7,5,3,44,3,5,52,123,2,4,6));
console.log(Math.max(1,2,3,8,7,5,3,44,3,5,52,123,2,4,6));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const minValue = 10
const maxValue = 20

console.log((Math.floor(Math.random()* (maxValue-minValue+1))) + minValue);












