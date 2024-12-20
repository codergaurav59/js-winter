const chessUser = {}
chessUser.name = "Ram"
chessUser.age = 18
chessUser.isWon = true

//console.log(chessUser);

const User = {
    userId: "AX12",
    age: 19,
    Name:{
        fullName: {
        FirstName: "Hari",
        LastName: "Verma",
    }
}
}

console.log(User.Name.fullName.LastName); //? ISKA BHI USE HAI

const Obj1= {A: 1, B:2}
const Obj2= {C: 3, D:4}
const Obj3= {E: 5, F:6}

console.log({Obj1,Obj2,Obj3});//this will not give actual values whereas give 3 object values
//const Objn = Object.assign(Obj1,Obj2)
//console.log(Obj1 == Objn);//this will give true so Obj2 is added in the Obj1 for that we use {} symbol for it.
const Objn = Object.assign({},Obj1,Obj2)
console.log(Objn);

//const Objm = {...Obj1,...Obj2,...Obj3};
//console.log(Objm);
console.log({...Obj1,...Obj2,...Obj3}); //seedhe bhi likh sakte console.log() me

//Objects in array
const PrimeUsers = [
    {
        id: 1,
        age: 10
    },

    {
    },

    {
    }
]

console.log(PrimeUsers[0].age);

console.log(chessUser);
console.log(Object.keys(chessUser));
console.log(Object.values(chessUser));
console.log(Object.entries(chessUser));

console.log(chessUser.hasOwnProperty('isWon'));









