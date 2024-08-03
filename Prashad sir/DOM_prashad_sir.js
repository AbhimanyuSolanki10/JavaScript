// todo Dom Methods -- Js Selectors
//? 1 doucment.getElementById("") It will return single element
//? 2 doucment.getElementByClassName("") It will retun array []
//? 3 document.getElementsByTagName("")  It will return array[]
//? 4 document.querySelector("") It will return single element
//? 5 document.querySelectorAll("") It will return array[]

// single element  or multiple element in form of array


// let  heading = document.getElementsByTagName("h1")
// console.log(heading)
//todo  on returning we get array because it will return for multiple emlents (HTMLCOLLECTON(3) [H1,H2,H3]) like we can have multiple h1 tag in file  
// console.log(heading[0]);
// heading[0].style.backgroundColor="red";
// let heading= document.getElementById("heading")
// console.log(heading)
// heading.style.background="red";

// let heading=document.getElementsByClassName('heading')
// console.log(heading);

// let heading2 = document.querySelector('#heading')
// console.log(heading2)
// !it will return first h1 because it target only single element
// let heading3 = document.querySelector('.heading')
// console.log(heading3)
// let heading4 = document.querySelector('div')
// console.log(heading2)

// let mydiv = document.querySelector("div")
// console.log(mydiv)
//! We can creat element using javascript
//let mydiv = document.querySelector("div")
//console.log(mydiv)
//let heading = document.createElement("h1")
//console.log(heading)
//? to insert text inside h1 but this will not display on UI so we have to say ki y kaha par jakar baithe so we use doucment.append() for multiple elements and document.appenChild() for single element
//heading.innerText="I am heading"
//? this will display on UI
//mydiv.append(heading)

//! to set the attribute in element 
// let myDiv= document.querySelector('div')
// myDiv.setAttribute("id","divId")
// console.log(myDiv)

//? we can creat elements by using innerHTML
let myDiv= document.querySelector('div')
myDiv.innerHTML = `
<h1 id="myheading">i am heading</h1>

<p>I am paragraph</p>

`

let heading= document.querySelector('#myheading')
heading.style.background="red";