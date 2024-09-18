

// 1. how to create an element using dom api methods

// createElement()

// const h1=document.createElement("h1");
// h1.textContent="Hello World"
// const body=document.body;
// body.style.cssText="background-color:black;color:white;"

//appendChild()
// body.appendChild(h1)

// insertBefore()
//insertAdjacentElement()

//first child
const p1=document.createElement("p")
p1.textContent="Child-1"

//last child
// const p2=document.createElement('p')
// p2.textContent="Child-4"


// const div=document.querySelector("div");
// div.insertAdjacentElement("afterbegin",p1)

// div.insertAdjacentElement("beforeend",p2)

// const p3=document.createElement("p")
// p3.textContent="Child-3"
// p2.insertAdjacentElement("beforebegin",p3)

// const div=document.querySelector("div")

// console.log("First Child",div.firstElementChild)

// console.log(div.firstElementChild.nextElementSibling)
// console.log("Last Child",div.lastElementChild)

// console.log(div.lastElementChild.previousElementSibling)


/* firstElementChild
    lastElementChild
    nextElementSibling
    previousElementSibling */




// setAttribute(_name of attribute,value of attribute)

// div.setAttribute("id","parent")
// div.setAttribute("style","color:blue;")

// getAttribute(id)
// const val=div.getAttribute("class")

//setAttribute("class","chombu") 
// div.setAttribute("class",`${val} container`)

// removeAttribute(id)
// div.removeAttribute("title")

/* classList
const div=document.querySelector("div")
console.log(div.classList)

if(!div.classList.contains("sagar")){
    // div.classList.replace("sagar","Shubham")
    // div.classList.remove("sagar")
}
else{
   div.classList.add("chunky", "pandey")
} */

/*   const lastChild=document.querySelector("div>:last-child")
   
    lastChild.parentElement.style.cssText="background-color:black;color:white;"

const div=document.querySelector("div")
const child=document.querySelector("div>:nth-child(3)")   
div.removeChild(child) */



const div=document.querySelector("div")
// const cloneElement=div.cloneNode(false)  //for shallow clone
const cloneElement=div.cloneNode(true)     //for deep clone

div.insertAdjacentElement("afterend",cloneElement)




