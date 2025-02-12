//problem in forEach loop
/*

const nums = [11,22,44,33,55,66]

const values = nums.forEach((item) => {
    console.log(item);
    return item //isse bhi undefined hi aaega values me
});

console.log(values); //undefined

*/
//filters
const nums = [11,22,44,33,55,66]
//const myNums = nums.filter( (num) => num > 30 ) //yeh bhi sahi hai
const myNums = nums.filter( (num) => {
    return num > 30 //curly braces me scope ki wagah se return karna mandatory hai
})
console.log(myNums);

const newNums = []
nums.forEach((num) => {
    if(num > 40) newNums.push(num)
})

console.log(newNums);


