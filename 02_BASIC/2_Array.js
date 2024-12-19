//push, concate, spread(...), flat
const marvelHeros = ["Ironman","Hulk","CaptainA","BlackW"]
const dcHeros = ["Superman","Batman","Flash"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);
//console.log(marvelHeros[4][1]);


const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

const all_Heros = [...marvelHeros,...dcHeros]
console.log(all_Heros);

const Arr = [1,2,3,[4,5],6,[7,8,[9,0,11],12],13]
const useableArr = Arr.flat(Infinity) //yaha hume depth likhni hai like in this case 2
console.log(useableArr); //sabh numbers hi print honge

console.log(Array.isArray("Ram"));
console.log(Array.from("Ram"));
console.log(Array.from({name: "Ram"})); //Empty array (interesting) here we have to give the way to change object to array

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1,score2,score3));




 

