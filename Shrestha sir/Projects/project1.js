//1: Get Random Color Method
function getRandomColors(){
    const hexa = '0123456789abcdef'
    let color = '#';
    for(let i=0;i<6;i++){
        color+=hexa[Math.floor(Math.random()*16)]
        // color+=hexa[Math.floor(Math.random()*hexa.length)]
    }
    return color;
}
//2: Update color Mehtod
function updateColor(){
    const color= getRandomColors();
    const displayContainer = document.getElementById('displayColor');
    const input = document.getElementById('colorCode');
    input.value=color;
    displayContainer.style.backgroundColor=color

}
// 3. start button
let id;
const startButton = document.getElementById('start')
startButton.addEventListener('click',()=>{
    id=  setInterval(updateColor,1000);
})

// 4. stop button
const stopButton = document.getElementById('stop');
stopButton.addEventListener('click',()=>{
    clearInterval(id)
})

// 5. clear button
const clearButton =document.getElementById('clear');
clearButton.addEventListener('click',()=>{
clearInterval(id);
 const displayContainer = document.getElementById('displayColor');
    const input = document.getElementById('colorCode');
    input.value="";
    displayContainer.style.backgroundColor="white"

})


//6. Copy button
const copyButton =document.getElementById("copy")


//7. Copy color code Method
function copyColorCode(){
const input = document.getElementById('colorCode');
input.focus() //andar jana
input.select()


navigator.clipboard.writeText(input.value)
.then(function(){
    alert("Copied to Clipboard: " + input.value)
}).catch(function(){
    alert("failed to copy the color code.")
})


}
copyButton.addEventListener("click",copyColorCode)





