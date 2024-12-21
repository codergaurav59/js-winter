function CartPrice(...num){// ... -> Rest operator
    return num
}

console.log(CartPrice(100,200,300))

function ValueAndPrice(val1,val2,...num){
    return num
}

console.log(ValueAndPrice(100,200,300,400,500));

const user = {
    name: "Ram",
    age: 18
}

function getObjectValue(anyObj){
    console.log(`THE USER'S NAME IS ${anyObj.name} AND AGE IS ${anyObj.age}.`);
}

getObjectValue(user)
getObjectValue({
    name: "Sham",
    age: 20
})

const myArr = [10,20,40,50,70]

function get3rdIndexVal(anyArray){
    console.log(anyArray[3]);
}

get3rdIndexVal(myArr)
get3rdIndexVal([9,8,7,6,5,4,3])


