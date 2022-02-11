
/*
// setTimeout(bir_fonksiyon, milisaniye_cinsinden_süre)

setTimeout(() => {
    console.log("Merhaba");
}, 2000);

// setInterval(bir_fonksiyon, milisaniye_cinsinden_süre)
// durdurmazsan sürekli çalışır.
setInterval(() => {
    console.log("Verilen her saniye geçince işlemi yapar");
}, 2000)
*/


/*
const sayHi = (cb) => {
    cb();
};


// Parametre olarak fonksiyon verdik
sayHi(() => {
    console.log("Hello")
});
*/

import fetch from "node-fetch"

// Bu şekilde sıraya koymuş olduk eğer fetchler iç içe olmasa ayrı ayrı yazmış
// olsaydım işlemler sıraya konulmuş olmayacaktı.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data =>data.json())
//     .then(users => {

//         console.log("Users yüklendi!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1").then(data => data.json())
//             .then(posts => console.log("Postlar Yüklendi!",posts));
// });


// Burada sıraya koymak için fonksiyonları bekletiyoruz. 
// async function getData(){
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    
//     console.log("users", data)
//     console.log("post1", post1)
//     console.log("post2", post2)
// }

// getData();


// Anonim fonksiyon
// (async() => {
//     console.log("Selam")
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    
//     console.log("users", data)
//     console.log("post1", post1)
//     console.log("post2", post2)
// })();

import axios from "axios";
/*

(async() => {

    // Burada obje olarak döndüğü için bizim de buradan obje olarak almamız gerekiyor
    // objemizin data attributeını almak istiyoruz ancak birden fazla kez data ismini
    // kullanamayacağımız için ECMAScript 6 ile gelen özelliği kullanarak ismi değiştiriyoruz
    const { data:users } = await axios("https://jsonplaceholder.typicode.com/users");
    
    const { data:post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    
    const { data:post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
    
    console.log("users", users)
    console.log("post1", post1)
    console.log("post2", post2)
})();

*/





// then yapısı promise döndüren objeden sonra kullanılır.
// Promise(resolve, reject) -> resolve olunca then'e düşer reject olunca catch'e düşer
// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         // console.log("comments")
//         // resolve();

//         // resolve("comments")
//         // resolve({ text: "Selam"});

//         if (number == 1){
//             resolve({ text: "Selam"});
//         }

//         reject("Bir problem oluştu")
//     });
// };

// getComments(2).then((data) => console.log(data)).catch((e) => console.log(e));



// await async bir fonksiyonun içerisinde olmak zorundadır yoksa hata verir
// başta hata vermesinin sebebi buydu


const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data)
    });
};
// Sıralı olmayan ikili
// getUsers().then((data) => console.log(data)).catch((e) => console.log(e));



const getPosts = (id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+id);
        resolve(data)
    });
};
// Sıralı olmayan ikili
// getPosts(1).then((data) => console.log(data)).catch((e) => console.log(e));



// Sıralı olan ikili
// (async () => {
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));

//     await getPosts(1)
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));
// })();



// (async () => {
//     try{
//         const users = await getUsers();

//         const post = await getPosts(1);

//         console.log(users);
//         console.log(post);
//     }catch(e){
//         console.log(e)
//     }
    
// })();



Promise.all([getUsers(), getPosts(1)]).then(console.log).catch(console.log)
