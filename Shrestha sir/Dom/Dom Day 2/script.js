//!  Targeting the body and giving background color black
// const body = document.body
// body.style.cssText=`background-color:black; color:white;`

//!  How to create an element using Dom API mehtods
//! createElement

// const h1 = document.createElement("h1");
// h1.textContent="Hello world"
// console.log(h1.textContent)


//! How to insert an element in JS
//! 1:- Target Parent Element
//! const parent=document.body;
//! 2:- appendChild()  -->It will add element in the end of the body 
//! parent.appendChild(h1)

// const body = document.body
// const h1 = document.createElement("h1");
// h1.textContent="Hello world"

//! appendChild()
// body.appendChild(h1)

//! inserttBefore()
//! insertAdjacentElement


// insertAdjacent Element("afterend","p")

//parentelement.insertAdjacent Element(position,element)
//?   siblings                         |      Childrens
// ------------------------------------|-------------------------
//? (Kisi tag ke pehle)  beforebegin   | (first child)   afterbegin
//?  (Kisi tag ke baad) afterend       | (Chlid child)   beforeend


// const div = document.querySelector('div')
// const h1= document.createElement('h1')
// h1.textContent="Learning Dom"
// div.insertAdjacentElement("beforebegin",h1)
// div.insertAdjacentElement("afterend",h1)

//! first child
// const p1=document.createElement('p')
// p1.textContent="Child 1"


// const p3=document.createElement('p')
// p3.textContent="Child 3"

//! Last child
// const p2=document.createElement('p')
// p2.textContent="Child 4"


// const div = document.querySelector('div')
// div.insertAdjacentElement("afterbegin",p1)
// div.insertAdjacentElement("beforeend",p2)
// p2.insertAdjacentElement("afterbegin",p3)

//! firstElementChild
//! lastElementChild
//! nextElementChild
//! previousElementChild

// const  div = document.querySelector("div");
// console.log("first Child",div.firstElementChild)
// console.log("Next Child",div.firstElementChild.nextElementSibling)
// console.log("Last Previous Child",div.lastElementChild.previousElementSibling)
// console.log("last Child",div.lastElementChild)



//todo    Adding attribute in tags
// const div = document.querySelector("div")
//! setAttribute("name of attribute" ," value of attribute")

// div.setAttribute("id","parent")
// div.setAttribute("style","color:blue")
// div.setAttribute("class","container div1")



//! How to get attribute
// const val=div.getAttribute("class")
// console.log(val)

//! set attribute
// div.setAttribute("class",`${val} container`)

//! removeAttribute(id)
// div.removeAttribute('title')

//! ClassList

// const div=document.querySelector("div")
// console.log(div.classList)

// if(div.classList.contains("sagaar")){
//     div.classList.replace("sagar","subham")
    // div.classList.remove("sagar")
// }else{
//     div.classList.add("Prashad","Shresth")
    
// }
// console.log(div.classList)

// if(div.classList.contains("sagar")){
//     alert("dost dost na raha")
// }else{
//     alert("Bhai Bhai")
// }


//todo  How to target parent by using child

// const  lastChild = document.querySelector("div>:last-child")
// lastChild.parentElement.style.cssText='background-color:black; color:white;'

// const div=document.querySelector("div")
//todo    How to target nth child
// const child=document.querySelector("div >:nth-child(3)")
// div.removeChild(child)

// todo Clone The Element 
// const div=document.querySelector("div")
//! For Shallow clone or Fake Clone
// const cloneElement= div.cloneNode(false)   
//! For Deep clone or Real Clone
// const cloneElement= div.cloneNode(true)
// div.insertAdjacentElement("afterend",cloneElement)

