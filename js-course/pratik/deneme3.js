

// Arrays

// let domain = "kodluyoruz"
// let isActive = false
// let items = [1,2,3, isActive, domain]

// console.log(items)

// document.querySelector("#info").innerHTML = items.length

// console.log(typeof(items)) // object
// console.log(Array.isArray(items))



/*
let items = [10,20,30,40]
items.push(50) // sona ekleme
items.unshift(5) // başa ekleme
console.log(items)
items.pop() // son elemanı döndür ve arrayden çıkar
items.shift() // ilk elemanı döndür ve arrayden çıkar
*/

/*
let items = [1,2,3,4,5]
let female = ["Ayse","Hulya","Merve"]
let male  = ["Ahmet","Hasan","Mehmet"]

items.unshift(female)
items.push(male)

let newItems = items.splice(2, 3) // 2.indexten başla 3 tane al
console.log(newItems)

copyItems = items.slice() // array kopyalama
let es6Items = [...items] // array kopyalama
let allUsers = [...female, ...male] // es6 birden fazla arrayin birleştirilmesi

console.log(allUsers.toString()) // arraydaki her elemanı stringe çevirir
console.log(allUsers.join(" --- "))

allUsers.splice(allUsers.length-1, 0, "Melissa")
console.log(allUsers)
*/


let users = ["Lorem","Ipsum","Dolor"]
// for (let index=0; index < 10; index++){
//     console.log(index)
// }


// let index = 0;

// const userListDOM = document.querySelector("#userList")

// for (; index < users.length; index++) {
//     const lidom = document.createElement("li")
//     lidom.innerHTML = users[index]
//     // console.log(users[index])
//     userListDOM.appendChild(lidom)
// }


// for(i=0; i<3; i++){
//     console.log("Merhaba")
// }


// break looptan çıkar, continue sadece mevcut conditionı es geçer




// While Dongusu

// let username;

// while(!username){
//     username = prompt("Kullanıcı adını giriniz: ")
//     console.log(username)
// }

// const PRODUCTS= ["Laptop", "Phone","Speaker","Desktop","Server"]

// // PRODUCTS.forEach((product, index, array) => console.log(product, index, array))
// PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + " 111"))
// console.log(PRODUCTS)


// filter

// const PRODUCTS = ["Mic", "Cable","Speaker","Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)

// const USERS = [
//     {fullname: "Ayse Sumer", isActive:false},
//     {fullname: "Mehmet Den", isActive: true},
//     {fullname: "Ayse Densu", isActive:true},
//     {fullname: "Mehmet Sumden", isActive: false},
// ]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
// console.log(ACTIVE_USERS)


// MAP

const USERS = ["aYse", "MehMet", "TugCe", "aKsel"]

// const NEW_USERS = USERS.map(user => user.toLowerCase())
// console.log(NEW_USERS)


// const USERS_OBJECT = USERS.map(item => 
//     {
//         return {userName: item, shortname: `${item[0].toUpperCase}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
//     }
// );


const USERS_OBJECT = USERS.map(item => (
        {userName: item, shortname: `${item[0].toUpperCase}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    )

)
console.log(USERS_OBJECT)



