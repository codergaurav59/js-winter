function add2Nums(num1,num2){
    console.log("Add done");
    return num1 + num2
    //console.log("After return"); this will not print
}

console.log(add2Nums(4,8));

function Message(username){// yaha default username bhi de sakte like Message(username == "Rohan"){}
    if(!username){
        console.log("Give username first");
        return
    }

    console.log(`YOU JUST LOGGED IN AS ${username}`);
    return
}

Message("Ram")
Message() //as undefined  and if statement is given than that will be printed


