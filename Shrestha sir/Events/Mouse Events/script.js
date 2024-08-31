//!MOuse Events
//todo 1:click---

//button
const startButton=document.getElementById('start');
function changeBg(){
    document.body.style.cssText="background-color:black; color:white;"
}

function dark(){
    let res = confirm("Dark mode Activated");
    // console.log(res)
    if(res==true){
        changeBg()
    }
    
}
// startButton.addEventListener('click',()=>{
    // changeBg()
//     dark()
// })

//! Click

// startButton.addEventListener('click',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! Mouseover
// startButton.addEventListener('mouseover',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })


//! dblclick
// startButton.addEventListener('dblclick',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! contextmenu -->use for right clilck
// startButton.addEventListener('contextmenu',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! mouseenter -->
// startButton.addEventListener('mouseenter',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! mouseleave or mouseout
// startButton.addEventListener('mouseleave',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! mousedown
// startButton.addEventListener('mousedown',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

//! mouseup
// startButton.addEventListener('mouseup',()=>{
//     document.querySelector('h1').textContent="meri anuradha esa nhi kar sakti....!!!"
// })

