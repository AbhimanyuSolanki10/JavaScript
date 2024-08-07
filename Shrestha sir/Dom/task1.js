//! NodeList = Impure Array
//!  HTML COLLECTION  = Impure Object it work lives

// const divTags = document.getElementsByClassName('iteam')

// console.log(divTags[2])
// divTags[0].textContent="HTML"
// divTags[1].textContent="CSS"
// divTags[2].textContent="Tailwind"
// divTags[3].textContent="Javascript"
// divTags[4].textContent="ReactJs"

// for(let i=0;i<5;i++){

//     console.log(divTags[i].textContent)
// }

//! If we want to convert impure array or non array into array we use .from method

const divs =document.querySelectorAll('div')
const newArray=Array.from(divs)
newArray.filter((val,i,array)=>{
    const mid =Math.floor(array.length/2)
    if(i>mid){
        val.style.color="deeppink"
    }
})
