const course = {
    name: "JS",
    durationWeeks: 2,
    instructorName: "Ram" 
}

console.log(course.instructorName);
//destructuring
const {name} = course //seedhe name ko console.log() me le sakte
const{instructorName: teacher} = course //yaha instructorName ki jagah teacher ko bhi seedhe console.log() me le sakte

console.log(name);
console.log(teacher);

//Destructuring in ReactJS
/*const navbar = (Props.company) =>{
}
ki jagah 
const navbar = ({company})=>{

}
navbar(company = "Tata")
*/

//Array is also can be destructured


//API: Application Programming Interface
//at present APIs are present in the form of JASON
//JASON
/*
{
    "name": "Ram",
    "age": 19,
    "price": "free"
}
*/

//So if we get a API in the form of JASON then we can use it because we know how to use Objects and arrays



