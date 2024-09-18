/*document.addEventListener("keypress",(event)=>{
    if(event.key==='d'){
        alert("Dark Mode Activated")
        document.body.style.cssText="background-color:black;color:white"
    }
    else if(event.key==='t'){
        alert("Teal Mode Activated")
        document.body.style.backgroundColor="#088178"
    }
    else{
        document.body.style.backgroundColor="white"        
    }
}) */

/*
document.addEventListener("keydown",(event)=>{
    if(event.ctrlKey  && (event.key==='d'||event.key==='D'))
    {        
        event.preventDefault()
        document.body.style.cssText="background-color:black;color:white;"
    }
    else if(event.ctrlKey && (event.key==='l'||event.key==='L'))
    {
         event.preventDefault()
        document.body.style.cssText="background-color:white;color:black;"
    }
}) */


    document.addEventListener("keydown",(e)=>{
        if(e.ctrlKey && (e.key==="c"||e.key==="C")){
            e.preventDefault()
            console.log("copy Mode disabled..!!")
        }
        else if(e.ctrlKey && (e.key==="s"||e.key==="S")){
            e.preventDefault()
            console.log("Save Mode disabled..!!")
        }
        else if(e.ctrlKey && (e.key==="v"||e.key==="V")){
            e.preventDefault()
            console.log("Pase Mode disabled..!!")
        }
    })
