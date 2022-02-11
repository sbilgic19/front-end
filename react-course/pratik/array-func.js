
const users = ["Ayşe", "Ahmet","Murat"]
const USERS2 = [
    {
        name: "Mehmet",
        age: 21
    },
    {
        name: "Murat",
        age: 30
    },
    {
        name: "Mehmet",
        age: 30
    }
]
/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
// users.push("Ali")
// console.log(users)




// map

// for (let i=0; i<users.length; i++){
//     console.log(users[i]);
// }

// users.map((item) => console.log(item))

// USERS2.map((item) => console.log(item.name))






// find

// const findIt = USERS2.find((item) => item.name == "Mehmet" && item.age > 20)
// console.log(findIt)




// filter

// const filtered = USERS2.filter(({name, age}) => name == "Mehmet")
// console.log(filtered)



// some true false döner
// const some_one = USERS2.some((item) => item.age > 20)
// console.log(some_one)




// every true false döner
// const some_one = USERS2.some((item) => item.age > 20)
// console.log(some_one)




// includes true false döner
const fruits = ["Elma","Armut","Muz"]

const isInclude = fruits.includes("Muz")
console.log(isInclude)