//Javascript Execution context:
//                             1) Global Execution context
//                             2) Function
//                             3) Eval

//Every context has:
//Phases: 1) Memory Allocation Phase
//        2) Execution phase

let val1 = 3
let val2 = 4

function addNum(num1,num2){
    let total = num1 + num2
    return total 
}

let result1 = addNum(val1,val2)
let result2 = addNum(4,7)

/*
1) Global Execution: allocated in this
   Memory phase:
   val1 = undefined
   val2 = undefined
   addNum = definition
   result1 = undefined
   result2 = undefined

   Execution phase:
   val1 <- 3
   val2 <- 4

   addNum ---> new Execution context = new variable environment + Execution thread
               New Execution Phase: 
               Memory phase: num1 = undefined
                             num2 = undefined
                             total = undefined
               Execution phase: num1 = val1 = 3
                                num2 = val2 = 4
                                total = 7
                                return in Global EC
                delete new Execution phase

        Same for result2
*/

//Call Stack: means execution does in lifo method

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}


one()
two()
three()