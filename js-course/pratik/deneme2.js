
// FORM Giriş

// let formDom = document.querySelector("#userForm")
// formDom.addEventListener("submit", formSubmit)

// function formSubmit(event){
//     event.preventDefault()
//     console.log("islem tm")
//     let scoreInputDOM = document.querySelector("#score")
//     console.log(scoreInputDOM.value)


//     localStorage.setItem("score", scoreInputDOM.value)
// }



// FORM Bolum Sonu Egzersizi

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")

const ALERT = (title, message, classname="warning") => `
<div class="alert alert-${classname} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else{
        console.log("Hatalı Giriş")
        alertDOM.innerHTML = ALERT("Baslık bilgisi","Hatalı giriş yapıldı", "danger")
    }
}
let userlistDOM = document.querySelector("#userlist")

const addItem = (username, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    ${username}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add("list-group-item", "d-flex","justify-content-between", "align-items-center")
    userlistDOM.append(liDOM)
}
