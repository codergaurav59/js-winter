function one(){
    const username = "Ram"

    function two(){
        const website = "Google"
        console.log("inner", username);
        console.log("inner", website);
    }
    console.log(username);
    //console.log(website);

    two()
}

one()
//console.log(username);
//console.log(website);

if(true){
    const playerName = "Messey" 
    if(playerName == "Messey"){
        const sports = "Football"
        console.log(playerName);
        console.log(sports);
    }
    console.log(playerName);
    //console.log(sports);
}

//console.log(playerName);
//console.log(sports);


//$$$$$$$$$$$$$$$$$$$.......INTERESTING........$$$$$$$$$$$$$$$$$$

console.log(add1(5)); // This will be executed beacuse this is declared as a function
function add1(num){
    return num + 1
}

//add2(5) : This will note be executed before the declaration because this funtion is declared as a vaariable
//FUNTION AS A VARIABLE
const add2 = function(num2){
    return num2 + 2
}

console.log(add2(5));





