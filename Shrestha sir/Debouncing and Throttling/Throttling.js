// let counter = 1;
// function provideData(){
//     const button = document.getElementById('btn')
//     button.disabled=false
//     console.log("User Clicked....." + counter++);
// }

// function mythrottle(callback,delay){
//     return function(...arg){
//         document.getElementById('btn').disabled=true
//         setTimeout(() => {
//             callback()
//         }, delay);
//     }
// }


// const task = mythrottle(provideData,2000);



//! Drawback
let counter = 1;
function provideData(){
    const button = document.getElementById('btn')
    button.disabled=false
    console.log("User Clicked....." + counter++);
}