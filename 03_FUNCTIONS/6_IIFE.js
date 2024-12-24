//Immediately Invoked Function Expressions(IIFE)
//Reseons: 1)**** jisse hamara funtion global scope se pollute na ho
//         2) Immediately invoke(run) ho jae


// ()()

//Named  IIFE
(function chai(){
    console.log(`Hello coder`);
})(); //***********yaha semicolon lagana necessary hai jisse iife ko pata chal jae ki kabh rokna hai context

//Unnamed IIFE
(() => console.log(`Hello arrow coder`))(); //ARROW FUNCTION WHICH IS IIFE here

((num1,num2) => console.log(num1+num2) ) (3,5); //Give here argument

