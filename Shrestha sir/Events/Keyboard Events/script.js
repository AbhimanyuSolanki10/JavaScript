//! KeyboardEvent
// 1.:keypress
// 2.:keydown
// 3.:keyup

// document.addEventListener('keypress',(e)=>{
    // console.log(e)
    // if(e.key==='d'){
    //     alert("Dark Mode Activated")
    //     document.body.style.cssText="background-color:black;color:white;";
        
    // }else if(e.key==='t'){
    //     alert("Teal Mode Activated")
    //     document.body.style.cssText="background-color:#088178;";
        
    // }else{
    //     document.body.style.cssText="background-color:white;";

    // }

// })

//? important note
// event.ctrlkey-----It returns true or false
// event.shiftkey-----It returns true or false
// event.altkey-----It returns true or false

// document.addEventListener("keydown",(event)=>{
//     if(event.ctrlKey && (event.key==='d' || event.key==='D')){
//         console.log(event.ctrlKey);

//         event.preventDefault();
//         document.body.style.cssText="background-color:black; color:white;"
//     }else if(event.ctrlKey && event.shiftKey && (event.key==='l' || event.key==='L')){
//         console.log(event.shiftKey);
//         event.preventDefault();
//         document.body.style.cssText="background-color:white; color:black"
//     }
// })


//! Dom ContentLoaded event
// todo 

document.addEventListener("keydown",(event)=>{
    if(event.ctrlKey && (event.key==='c' || event.key==='C')){
        console.log("Copy mode Diable");

        event.preventDefault();
    }else if(event.ctrlKey && (event.key==='v' || event.key==='V')){
        console.log("Paste Mode Disabled");

        event.preventDefault();
    }else if(event.ctrlKey && (event.key==='s' || event.key==='S')){
        console.log("Save Mode Disabled");

        event.preventDefault();
    }
})

