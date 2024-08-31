//! Scroll Events in js
// 1:scroll
// 2:wheel

document.addEventListener('scroll',()=>{
    let scrollPosition=window.scrollX;
    if(scrollPosition>=1200){
        console.log("scroll-4");
        document.body.style.backgroundColor="black"
    }
    else if (scrollPosition>=900){
        console.log("Scroll-3");
        document.body.style.backgroundColor="orange"
    }
    else if(scrollPosition>=600){
        console.log("Scroll-2");
        document.body.style.backgroundColor="teal"
    }else if(scrollPosition>=300){
            console.log("Scroll-1");
        document.body.style.backgroundColor="violet"
    }else{
        document.body.style.backgroundColor="white"
    }
})
