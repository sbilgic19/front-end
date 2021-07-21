let nameTag = document.querySelector("#myName");

let name = prompt("Adınızı giriniz: ");

nameTag.innerHTML = name;

function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();

    switch(d){
        case 1:
            d = "Pazartesi";
            break;
        case 2:
            d = "Salı";
            break;
        case 3:
            d = "Çarşamba";
            break;
        case 4:
            d = "Perşembe";
            break;
        case 5:
            d = "Cuma";
            break;
        case 6:
            d = "Cumartesi";
            break;
        case 7:
            d = "Pazar";
            break;
        

    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${d}`;
    //document.querySelector("#myClock").textContent = `${h}:${m}:${s} ${d}`;

    setTimeout(showTime, 1000);
}

showTime();
