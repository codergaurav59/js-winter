//this is applicable only on objects not in functions

const user = {
    username: "Ram",
    price: 19,

    welcome(){
        console.log(`${this.username} is welcomed`);
        console.log(this); //this will show current context which means whole object
        
    }
}

user.welcome();
user.username = "Sham",
user.welcome();
console.log(this); //here this will show {} empty string

function boy(){
    let name = "Jay" 
    console.log(this);//this will print so many things
    //console.log(this.name);  //this will print undefined because not applicable for functions  
}

/*const boy = function(){
    let name = "Jay" 
    console.log(this);//this will print so many things
    //console.log(this.name);  //this will print undefined because not applicable for functions  
} */

console.log("FOR BOY FUNCTION");


boy()

//ARROY FUNCTIONS
const chai = () => {
    let brand = "Taj"
    console.log(this); //will give {} beacuse not applicable in arrow funtion
    console.log(this.username); //undefined
}

console.log("For Chai function");
chai()


//const add2 = (num1,num2)=>{
//  return num1 + num2
//}

//const add2 = (num1,num2) => num1+num2
const add2 = (num1,num2) => (num1+num2)

console.log(add2(3,6));

//const giveObj =  () => {username: "Ghani"} //This will give undefined because for returning object we have to use their parenthesis()
const giveObj = () => ({username: "Ghani"})
console.log(giveObj());

