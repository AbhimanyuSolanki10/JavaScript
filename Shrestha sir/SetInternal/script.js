// let count = 1;
// function greet(){
//     console.log(`Namaste Developer....${count++}`)
// }

// greet()
// setInterval(greet, 1000);
// let intervalId = setInterval(greet, 1000);

let count = 1;
let intervalId;
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

startButton.addEventListener('click',()=>{
    intervalId= setInterval(()=>{
        console.log(`Namster Developer.. ${count++} `)
    },1000)
})

stopButton.addEventListener('click',()=>{
    console.log(intervalId)
    clearInterval(intervalId)
})