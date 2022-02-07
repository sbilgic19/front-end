
let userlistDOM = document.querySelector("#list")

function newElement(){
    const element = document.querySelector("#task")
    if(element.value && element.value.trim().length !==0){
        let newli = document.createElement("li")
        newli.innerHTML = `${element.value}
        <button
        type="button"
        class="ccl close mt-2 mr-3"
        aria-label="Close">
        
        <span aria-hidden="true">&times;</span>
        
        </button>
        `
        newli.addEventListener("click", function() {
            newli.classList.toggle('checked');
            localStorage.setItem("ullist", document.getElementById("list").innerHTML);
            $('.done').toast("show"); 
            // newli.style.textDecoration = "line-through"
            // newli.style.cursor = "pointer"
        })
       
        userlistDOM.append(newli)
        element.value = ""
        $('.success').toast("show")
        newli.children[0].onclick = deleteTask
        localStorage.setItem(`item ${localStorage.length + 1}`, newli.innerText)
    }else{
        console.log("Boş ekleme yapamazsın")
        $('.error').toast("show")
    }

}
function deleteTask() {
   this.parentElement.remove()
}

// function deleteElement(id){
//     document.getElementById("list").removeChild(id);
//     document.getElementById("task").value = '';
//     $('.deleted').toast("show"); 
//     localStorage.setItem("ullist", document.getElementById("list").innerHTML);
// }







