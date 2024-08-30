// function fun (){
//     console.log("async task-1")
//     return Promise.resolve("Completed")
// }
// fun();


//! await tab use karenge jaha se time lagega.....woh promise return karega
//! response readable nhi hota hai 
//! data mai readable js object format mein kar liya .json() use kar ke

const cardsContainer = document.querySelector('.card-container');
let cards = "";


async function fun(params) {
    const response =await fetch('https://api.github.com/users')
    // console.log(response)
    const data = await response.json();
    // console.log(data)
    return data
}
fun().then(function(result){
    // console.log(result)
    result.map((v,i)=>{
        if(1){
            // console.log(v)
            cards+=`<div class="card">
            <div class="profile">
                <img src="${v.avatar_url}" alt="">
            </div>
            <h2 id="userId">User ID: ${v.id}</h2>
            <h2 id="userName">User Name: ${v.login}</h2>
        </div>`
        cardsContainer.innerHTML=cards;
    }
})
// cardsContainer.innerHTML=cards;
})


