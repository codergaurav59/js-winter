//smae as cpp
//continue: isse skip hota hai who wala case
//break: isse loop toot jata hai

for(let j=0;j<7;j++) console.log(`Now ${j}`);

let i = 10

while(i>5){
    console.log(i);   
    i--
}

console.log(`Now do while loop`);

//do while loop me kam se kam 1 baar toh output print hoga hi
do{
    console.log(i);
    i++
} while(i<10)

//for loop can be used in array and strings
const arr = [1,2,3,4,5,6]
for(const num of arr) console.log(num);
