import axios from "axios"

async function getData(user_id) {

    if(user_id < 0 || !Number.isInteger(user_id)){
        throw "user_id is not between the acceptable range or not a number!"
    }
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);

    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);

    user.posts = [...posts]
    console.log("user:", user)
    //console.log("posts:", posts)
    
};

export default getData