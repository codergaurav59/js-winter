//MAPS
const nums = [11,44,33,66,88]
const newNums = nums.map((num) => num+1000)
//const newNums = nums.map((num) => {return num+1000})
console.log(newNums);

//Chaining = map+map or map+map+filter or others
const myNums = newNums
               .map((num) => num*9)
               .map((num) => num *10)
               .filter((num) => num%20==0)

console.log(myNums);


//REDUCE
const values = [9,8,7,6,5,4]
const myValues = values.reduce((acc,currVal) => {
    console.log(`Value of acc is ${acc} and Value of currval is ${currVal}`);
    return acc + currVal;
}, 0) 

console.log(myValues);


const course = [
    {
        cname : "js",
        cprice : 1000
    },
    {
        cname : "java",
        cprice : 2000
    },
    {
        cname : "cpp",
        cprice : 3000
    },
    {
        cname : "dsa",
        cprice : 4000
    }
]
//using reducde in array of objects
const mycourseprice = course.reduce((acc,item) => acc + item.cprice, 0)

console.log(mycourseprice);




