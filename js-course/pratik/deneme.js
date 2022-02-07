
/*
console.log("Berk")


console.log(document.location)

//document.body.style.backgroundColor = "yellow"

console.log("BREAK")
console.log(document.URL)
*/


//let title = document.getElementsByTagName('h2')

/*
let title = document.getElementById("title")
console.log(title.innerHTML = "Değiştirdik")


let link = document.querySelector("ul#list>li>a") //querySelector bir tane seçer querySelectorAll hepsini seçer
console.log(link)
link.innerHTML = "Link bilgisi değiştirildi"

link = document.querySelector("#kodluyoruz") 
console.log(link.innerHTML)
link.style.color = "red"
link.classList.add("btn")
*/


/*
let fullname = prompt("Lütfen adınızı giriniz")
console.log(fullname)


let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullname}</small>`
*/


/*
let item = document.querySelector("ul#list>li:last-child")
item.innerHTML = "SON OGE DEGISTIRILDI"
console.log(item)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öğe"
// ulDOM.append(liDOM)

ulDOM.prepend(liDOM)
*/

/*
let greeting = document.querySelector("#greeting")
greeting.classList.add("berk", "serkan")
greeting.classList.remove("berk") // olmayan bir şey olunca silmez hata da vermez.
console.log(greeting.classList)
*/

/*
let username = prompt("Kullanıcı adınızı giriniz: ")

if(username.length > 0){
    console.log("Kullanıcı bilgisi alındı")
}else{
    console.log("Kullanıcı bilgisi alınamadı")
}
*/

/*
var money = 20;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy)
*/


/*
const smile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
let info = document.querySelector("#info")
let score = prompt("Puani girin: ")
let textInfo = smile;
if(score >= 90) {
    textInfo += " AA"
}else if(score >= 85){
    textInfo += " BA"
}else if(score >= 80){
    textInfo += " BB"
}else if(score >= 75){
    textInfo += "CB"
}else{
    textInfo = "Bilgiler doğru değil"
}

console.log(textInfo)
console.log(info.classList)




info.innerHTML = `${textInfo} -> ${score}`
info.classList.add('text-danger')

*/


/*
function hello() {
    console.log("Merhaba")
}


hello()
*/

/*
// fat arrow function
const helloFunc = (name) => {return `Merhaba ${name}`}

let info = document.querySelector("#info")
info.innerHTML = helloFunc("Fidan")
*/



// DOM Events
/*

let info = document.querySelector("#info")
// info.addEventListener("click", function(){
//     console.log("Tıklandı")
// });

//info.addEventListener("click", domClick)
info.addEventListener("mouseover", domClick)

function domClick() {
    console.log("Etkinlik çalışıyor")
    this.style.color == "blue" ? this.style.color = "red" : this.style.color = "blue"
    console.log(this.innerHTML = "tıklandığı için bilgi değişti")
    console.log(this.style.color);
    // this.setAttribute("style", "width:1000px;height:1000px;")
    this.style.width = "1000px"
    this.style.height = "1000px"
   
}

*/



// localstorageın içerisinde tuttuğu bilgi string
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")


counterDOM.innerHTML = counter;
increaseDOM.addEventListener("click", myFunc)
decreaseDOM.addEventListener("click", myFunc)

function myFunc(){
    // console.log(this.id)
    if(this.id == "increase") {counterDOM.innerHTML = counter+=1;}
    else {counterDOM.innerHTML = counter-=1;}
    localStorage.setItem("counter", counter)
}








// localstorage ın yaklaşık 5mb lık limiti var
//localStorage.setItem("item", counter);
//localStorage.removeItem("item")

/*
Aynı zamanda session storagete da tutulabilir yani bu session sona erene kadar.

Veriler string olarak tutulmaktadır. JSON stringify toString kullanılabilir
*/


/*
let user = {user:"serkanberk", isActive: true}
localStorage.setItem("userinfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userinfo")
userInfo = JSON.parse(userInfo)
console.log(userInfo)
*/
























