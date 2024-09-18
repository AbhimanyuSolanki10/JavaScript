/*1. document.getElementById("")
const h1=document.getElementById("heading")
 h1.textContent="Bhai vo tujhe hi dekh rahi h..."
console.log(h1.textContent)

h1.setAttribute("class","head1")
if(h1.className==="head1"){
    console.log("Balle Balle Shawa Shawa..")
}

const h1=document.querySelector('h1')
h1.id="chombu"
*/


/* document.getElementsByClassName("")
const divTags=document.getElementsByClassName("item")
divTags[0].textContent="1. HTML"
divTags[1].textContent="2. CSS"
divTags[2].textContent="3. Tailwind CSS"
divTags[3].textContent="4. JavaScript"
divTags[4].textContent="5. React JS" */

/* document.getElementsByTagName("div") 
const divs=document.getElementsByTagName("Div")
console.log(divs)
console.log(divs[0])
console.log(divs[1].textContent)
divs[1].textContent="1. Priti"
console.log(divs[1].textContent) */

// divs[0].style.cssText="background-color:black;color:white;"

/* document.querySelector("") 
const div5=document.querySelector(".container :nth-child(5)")
div5.textContent="5. Abhi ni to kabhi nahi"
div5.style.color="red"; */

/* Drawback of querySelector
const h1=document.querySelector("h1")
console.log(h1) */

/* document.querySelectorAll()

const divs=document.querySelectorAll(".item")
divs.forEach((val,i,array)=>{
        if(i===0 || i%2===0){
            val.style.color="red"
        }
        else{
            val.style.color="aqua"
        }
})
 */

/* querySelectorAll() convert into Array
const newArray=Array.from(divs)
newArray.filter((val,i,array)=>{
    const mid=Math.floor(array.length/2)
    if(i>2){
        val.style.color="deeppink"
    }
})
*/















