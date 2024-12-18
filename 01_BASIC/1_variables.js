 console.log("HELLO WORLD")
 const a = 1
 let b = 2
 var c = 3 //var should not be used as it has scope problems
 d = 4 //this should also not be used without let or const
 let e //here its valuse is undefined

 //a = 10 this can not be done as const can not be changed
 b = 20
 c = 30
 d = 40

 console.table([a,b,c,d,e])