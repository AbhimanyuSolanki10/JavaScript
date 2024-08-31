const start=document.getElementById("fetch")
const high=document.getElementById("high")
const low=document.getElementById("low")
const cardContainer=document.querySelector('.container')
let arr;
let cards="";

//todo fetching fuction using async await
async function fetching() {
   const response = await fetch('https://fakestoreapi.com/products')
    // console.log(response)
    const data= await response.json();
    // console.log(data)
    return data;
}
// fetching();

//todo add event listenere on fetch button

// 
start.addEventListener('click',async ()=>{
   arr= await fetching();
   arr.map(value=>{
        // console.log(value)
        let {id,category,price,image}=value;
        cards +=`<div class="card">
            <div class="profile">
                <img src="${image}" alt="">
            </div>

            <h2>Id: ${id}</h2>
            <p><b>Category: ${category}</b></p>
            <p><b>Price: ${price} $</b></p>
        </div>`
        cardContainer.innerHTML=cards;

   })
})

//todo high to low button event listern
high.addEventListener('click',()=>{
    cards="";
    arr.sort((a,b)=>b.price-a.price);
    arr.map(value=>{
        // console.log(value)
        //destructuring
        let {id,category,price,image}=value;
        cards +=`<div class="card">
            <div class="profile">
                <img src="${image}" alt="">
            </div>

            <h2>Id: ${id}</h2>
            <p><b>Category: ${category}</b></p>
            <p><b>Price: ${price} $</b></p>
        </div>`
        cardContainer.innerHTML=cards;

   })
})
//todo low to high button event listern
low.addEventListener('click',()=>{
    cards="";
    arr.sort((a,b)=>a.price-b.price);
    arr.map(value=>{
        // console.log(value)
        //destructuring
        let {id,category,price,image}=value;
        cards +=`<div class="card">
            <div class="profile">
                <img src="${image}" alt="">
            </div>

            <h2>Id: ${id}</h2>
            <p><b>Category: ${category}</b></p>
            <p><b>Price: ${price} $</b></p>
        </div>`
        cardContainer.innerHTML=cards;

   })
})

// ! ek checkbox (price range k liye )and ek add to cart 
